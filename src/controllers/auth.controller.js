import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { createUserDB, getUserByEmailDB, getUserByCPFlDB } from "../repositories/user.repository.js";
import { createSessionDB } from "../repositories/auth.repository.js";

export async function signUp(req, res) {
    const { name, cpf, phone, email, password } = req.body
    try {
        const userEmail = await getUserByEmailDB(email)
        if (userEmail.rowCount !== 0) return res.status(409).send({ message: "E-mail já foi cadastrado!" })

        const userCPF = await getUserByCPFlDB(cpf)
        if (userCPF.rowCount !== 0) return res.status(409).send({ message: "CPF já foi cadastrado!" })

        const hash = bcrypt.hashSync(password, 10)
        await createUserDB(name, cpf, phone, email, hash)

        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount === 0) return res.status(401).send({ message: "E-mail não cadastrado!" })

        const isPasswordCorrect = bcrypt.compareSync(password, user.rows[0].password)
        if (!isPasswordCorrect) return res.status(401).send({ message: "Senha incorreta!" })

        const token = uuid()
        await createSessionDB(user.rows[0].id, token)
        res.send({ token })
    } catch (err) {
        res.status(500).send({ message: "Ocorreu um erro. Por favor, tente novamente mais tarde." });
    }
}
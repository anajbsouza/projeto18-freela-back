import { db } from "../database/db.connection.js";

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}

export function getUserByCPFlDB(cpf) {
    return db.query(`SELECT * FROM users WHERE cpf=$1;`, [cpf]);
}

export function createUserDB(name, cpf, phone, email, password) {
    return db.query(
        `INSERT INTO users (name, cpf, phone, email, password) VALUES ($1, $2, $3, $4, $5);`,
        [name, cpf, phone, email, password]
    );
}
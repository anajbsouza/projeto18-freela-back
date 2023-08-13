import { db } from "../database/db.connection.js";
import { createProductDB } from "../repositories/product.repository.js";

export async function addProduct(req, res) {
    const { category_id, name, description, sold, user_id } = req.body;
    try {
        await createProductDB(category_id, name, description, sold, user_id);
        res.status(201).send("Produto adicionado com sucesso!");
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message);
    }
}

export async function getProducts(req, res) {
    try {
        const products = await db.query(`SELECT * FROM products;`);
        
        res.send(products.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
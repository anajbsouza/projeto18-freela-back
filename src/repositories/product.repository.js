import { db } from "../database/db.connection.js";

export function createProductDB(category_id, name, description, sold, user_id) {
    return db.query(
        `INSERT INTO products (category_id, name, description, sold, user_id) VALUES ($1, $2, $3, $4, $5);`,
        [category_id, name, description, sold, user_id]
    );
}

export function addPhotoDB(product_id, url) {
    return db.query(
        `INSERT INTO photos (product_id, url) VALUES ($1, $2);`,
        [product_id, url]
    );
}

import { db } from "../database/db.connection.js";

export function createProductDB(category_id, name, description, sold, user_id) {
    return db.query(
        `INSERT INTO products (category_id, name, description, sold, user_id) VALUES ($1, $2, $3, $4, $5);`,
        [category_id, name, description, sold, user_id]
    );
}


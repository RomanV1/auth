import dotenv from 'dotenv'
dotenv.config();
import * as db from 'mysql2/promise'

export const pool = db.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

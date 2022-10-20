import dotenv from 'dotenv'
dotenv.config();
import * as db from 'mysql2/promise'

export const pool = db.createPool({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'site',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

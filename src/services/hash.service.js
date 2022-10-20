import bcrypt from 'bcrypt';
import { pool } from "./connect.js";

export class HashService {
    async createHash(pwd) {
        return bcrypt.hash(pwd, 10);
    }

    async checkHash(login, pwd) {
        try {
            const hash = await pool.query(`SELECT login, pwd FROM users WHERE login = '${login}'`);
            return bcrypt.compare(pwd, hash[0][0].pwd);
        } catch (err) {
            return false
        }
    }
}

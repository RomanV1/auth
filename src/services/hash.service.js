import bcrypt from 'bcrypt';
import { Connection } from "./connect.js";

export class HashService {
    async createHash(pwd) {
        return bcrypt.hash(pwd, 10);
    }

    async checkHash(data) {
        try {
            const pool = new Connection().connect();
            const hash = await pool.query(`SELECT login, pwd FROM users WHERE login = '${data.login}'`);
            return bcrypt.compare(data.password, hash[0][0].pwd);
        } catch (err) {
            return false
        }
    }
}

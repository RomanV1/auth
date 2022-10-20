import { pool } from "./connect.js";
import { HashService } from "./hash.service.js";

export class UserService {
    async createUser(login, email, pwd) {
        const hash = await new HashService().createHash(pwd);
        await pool.query('INSERT INTO users (login, email, pwd) VALUES (?, ?, ?)', [login.toLowerCase(), email.toLowerCase(), hash]);
    }

    async getUsers() {
        const users = await pool.query(`SELECT id, login, email FROM users`);
        return users[0]
    }
    async getUser(login, email) {
        const user = await pool.query(`SELECT login, email FROM users WHERE login = '${login}' OR email = '${email}'`);
        return user[0]
    }

    async getUserByID(id) {
        const user = await pool.query(`SELECT id, login, email FROM users WHERE id = ${id}`);
        return user[0].length == 0 ? 'User not found' : user[0];
    }

    async getUserByLogin(login) {
        const user = await pool.query(`SELECT id, login, email FROM users WHERE login = '${login}'`);
        return user[0].length == 0 ? 'User not found' : user[0];
    }
}
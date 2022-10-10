import { Connection } from "./connect.js";
import { HashService } from "./hash.service.js";

export class UserService {
    constructor() {
        this.pool = new Connection().connect();
    }

    async getUser(login, email) {
        const user = await this.pool.query(`SELECT login, email FROM users WHERE login = '${login}' OR email = '${email}'`);
        return user[0]
    }

    async getUserByID(id) {
        return this.pool.query(`SELECT id, login, email FROM users WHERE id = ${id}`);
    }

    async getUserByLogin(login) {
        return this.pool.query(`SELECT id, login, email FROM users WHERE login = '${login}'`)
    }

    async createUser(login, email, pwd) {
        const hash = await new HashService().createHash(pwd);
        this.pool.query('INSERT INTO users (login, email, pwd) VALUES (?, ?, ?)', [login.toLowerCase(), email.toLowerCase(), hash]);
    }
}
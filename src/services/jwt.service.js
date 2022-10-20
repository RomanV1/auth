import dotenv from 'dotenv'
dotenv.config();
import jwt from 'jsonwebtoken';

export class AccessToken {
    createToken(login, pwd) {
        return jwt.sign({ login: login, password: pwd}, process.env.SECRET_KEY, { expiresIn: '24h' });
    }
}
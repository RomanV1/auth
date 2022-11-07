import jwt from 'jsonwebtoken';
import { UserService } from '../services/user.service.js';

export const adminsMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({message: 'Unauthorized'});
        }

        token = token.split(' ')[1];
        let { login } = jwt.verify(token, process.env.SECRET_KEY);
        let admin = await new UserService().getAdmin(login);
        if (!admin) {
            return res.status(403).json({message: 'Unauthorized'});
        }

        next();
    } catch (e) {
        console.log(e);
        return res.status(403).json({message: 'Unauthorized'});
    }
}

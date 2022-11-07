import jwt from 'jsonwebtoken';

export const homeMiddleware = (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(403).json({message: 'Unauthorized'});
        }

        token = token.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (e) {
        console.log(e);
        return res.status(403).json({message: 'Unauthorized'});
    }
}
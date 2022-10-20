import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
// import UsersController from '../controllers/users.controller.js';
import jwt from 'jsonwebtoken';
export const router = express.Router();

// router.use((req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         if (token) {
//             const decoded = jwt.verify(token, process.env.SECRET_KEY);
//             req.user = decoded;
//             next();
//         } else {
//             res.status(403).json({message: 'NO'});
//         }
//     } catch (e) {
//         console.log(e);
//         return res.json({message: 'Unauthorized'});
//     }
// });

router.get('/', (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/home.html`);
    console.log(req.headers['authorization']);
});
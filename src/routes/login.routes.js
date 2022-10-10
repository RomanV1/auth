// import express from 'express';
// import { UserService } from "../db/user.service.js";
// import { HashService } from "../db/hash.service.js";
// export const router = express.Router();
//
// router.get('/login', (req, res) => {
//     res.status(200).sendFile(`${process.cwd()}/src/pages/login.html`);
// });
//
// router.post('/login', async (req, res) => {
//     const data = req.body;
//     await new HashService().checkHash(data) ?
//         res.status(200).send(`Successful <br> Login: ${req.body.login}`) :
//         res.send('Incorrect login or password');
// });
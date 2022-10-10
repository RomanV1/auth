import express from 'express';
import { UserService } from "../services/user.service.js";
import { HashService } from "../services/hash.service.js";

export const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).redirect('/login');
});

router.get('/register', (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/registration.html`);
});

router.get('/login', (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/login.html`);
});

router.post('/register', async (req, res) => {
    const data = req.body;
    const user = await new UserService().getUser(data.login, data.email);

    if (user.length === 0) {
        await new UserService().createUser(data.login, data.email, data.password);
        return res.status(200).redirect('/login');
    } else {
        return res.status(301).redirect('/register');
    }
});

router.post('/login', async (req, res) => {
    const data = req.body;
    await new HashService().checkHash(data) ?
        res.status(200).send(`Successful <br> Login: ${req.body.login}`) :
        res.send('Incorrect login or password');
});

router.get('/api/users/login/:login', async (req, res) => {
    const userLogin = req.params.login;
    const user = await new UserService().getUserByLogin(userLogin);
    res.status(200).send(user[0][0] ?? 'User is not found');
});

router.get('/api/users/id/:id', async (req, res) => {
    const userID = req.params.id;
    const user = await new UserService().getUserByID(userID);
    res.status(200).send(user[0][0] ?? 'User is not found');
});


import express from 'express';
// import jwt from 'jsonwebtoken';
import LoginController from '../controllers/login.controller.js';
export const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/login.html`);
});

router.post('/', LoginController.authUser);
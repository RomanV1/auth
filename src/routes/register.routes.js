import express from 'express';
import UsersController from "../controllers/users.controller.js";
export const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/registration.html`);
});

router.post('/', UsersController.createUser);
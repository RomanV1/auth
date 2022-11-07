import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import jwt from 'jsonwebtoken';
import { homeMiddleware } from '../middlewares/home.middleware.js';
export const router = express.Router();

router.get('/', homeMiddleware, (req, res) => {
    res.status(200).sendFile(`${process.cwd()}/src/pages/home.html`);
});
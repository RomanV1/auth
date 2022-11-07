import express from 'express';
import UsersController from '../controllers/users.controller.js';
import { adminsMiddleware } from '../middlewares/users.middleware.js';
export const router = express.Router();

router.get('/login/:login', adminsMiddleware, UsersController.getUserByLogin);
router.get('/id/:id', adminsMiddleware, UsersController.getUserByID);
router.get('/', adminsMiddleware, UsersController.getUsers);

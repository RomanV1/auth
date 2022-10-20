import express from 'express';
import UsersController from '../controllers/users.controller.js';
export const router = express.Router();

router.get('/login/:login', UsersController.getUserByLogin);
router.get('/id/:id', UsersController.getUserByID);
router.get('/', UsersController.getUsers);

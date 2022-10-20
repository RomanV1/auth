import express from 'express';
import * as loginRoutes from './login.routes.js';
import * as registerRoutes from './register.routes.js';
import * as homeRoutes from './home.routes.js';
import * as usersRoutes from './users.routes.js';

export const router = express.Router();

router.use('/login', loginRoutes.router);
router.use('/register', registerRoutes.router);
router.use('/home', homeRoutes.router);
router.use('/api/users', usersRoutes.router);


import { UserService } from "../services/user.service.js";

class UsersController {
    async createUser(req, res) {
        try {
            const { login, email, password } = req.body
            const user = await new UsersController().getUser(req, res);

            if (user.length === 0) {
                await new UserService().createUser(login, email, password);
                return res.status(200).redirect('/login');
            } else {
                return res.status(301).redirect('/register');
            }
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await new UserService().getUsers();
            return res.status(200).send(users);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getUser(req, res) {
        try {
            const { login, email } = req.body
            return new UserService().getUser(login, email);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getUserByID(req, res) {
        try {
            const { id } = req.params
            const user = await new UserService().getUserByID(id);
            return res.status(200).send(user);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getUserByLogin(req, res) {
        try {
            const { login } = req.params
            const user = await new UserService().getUserByLogin(login);
            return res.status(200).send(user);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}

export default new UsersController();
import { HashService } from '../services/hash.service.js';
import { AccessToken } from '../services/jwt.service.js';

class LoginController {
    async authUser(req, res) {
        const { login, password } = req.body
    
        if (await new HashService().checkHash(login, password)) {
            const token = new AccessToken().createToken(login, password);
            res.set('Authorization', 'Bearer ' + token);
            return res.redirect('/home');
        } else {
            return res.status(403).send('Incorrect login or password');
        }
    }
}

export default new LoginController();
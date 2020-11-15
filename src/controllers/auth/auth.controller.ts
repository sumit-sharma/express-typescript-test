import * as express from 'express';
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface';

class AuthController implements IControllerBase{
    public path = '/';
    public router = express.Router();

    constructor(){

    }

    public initRoutes() {
        this.router.get(this.path + 'login', this.showLogin);
        this.router.post(this.path + 'login');
    }


    showLogin = (req: Request, res: Response) => {
        res.render('auth.login')
    }
}
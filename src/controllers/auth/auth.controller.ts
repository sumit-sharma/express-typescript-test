import * as express from 'express';
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface';

class AuthController implements IControllerBase{
    public path = '/';
    public router = express.Router();

    private User = [
        {
            id: 1,
            author: 'Ali GOREN',
            content: 'This is an example post',
            title: 'Hello world!'
        }
    ]

    constructor(){
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + 'login', this.showLogin);
        this.router.post(this.path + 'login', this.postLogin);
    }


    showLogin = (req: Request, res: Response) => {
        res.render('login')
    }

    postLogin = (req: Request, res: Response) => {
        res.send("postLogin")
    }
}

export default AuthController
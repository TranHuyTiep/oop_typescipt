import { Router, Request, Response, NextFunction} from 'express';

export class user {

	router:Router;

	constructor(){
		this.router = Router();
		this.init();
	}

	public Getuser(req:Request, res: Response){
        res.render('user',{name:'Hello world'})
    }
    
	init(){
		this.router.get("/index", this.Getuser)
	}

}

const users = new user();
users.init();

export default users.router;
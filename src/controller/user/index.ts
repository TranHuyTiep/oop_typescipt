import { Router, Request, Response, NextFunction} from 'express';
import * as model_user from "../../model/user/model"
export class user {

	router:Router;

	constructor(){
		this.router = Router();
		this.init();
	}

	public Getuser(req:Request, res: Response){
		model_user.default.get_user('tiep',(erro,data)=>{
			res.json({name:data})
		})
    }
    
	init(){
		this.router.get("/index", this.Getuser)
	}

}

const users = new user();
users.init();

export default users.router;
import {Request,Response,Router,NextFunction} from "express"

export class api{

    router : Router;
    
    constructor(){
        this.router = Router();
        this.init();
    }

    public getApi (req:Request,res:Response){
       res.json({
           name:'Tran Huy Tiep'
       })
    }

    init(){
        this.router.get('/index',this.getApi)
    }

}

const api_tions = new api();
api_tions.init();

export default api_tions.router


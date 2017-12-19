import * as path from 'path'
import * as express from 'express'
import * as logger  from 'morgan' 
import * as bodyParser from 'body-parser'

import index from './controller/user/index'
import api from     './controller/api/index'

class App{
    
    public express : express.Application;

    constructor(){
        this.express = express();
        this.middleware();
        this.router()
    }

    private middleware():void{
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended:false}))
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "ejs");
    }

    private router():void{
        let router = express.Router()
        this.express.use('/user/', index);
        this.express.use('/api/' , api)
    }
}

export default new App().express;
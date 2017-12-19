import * as schema from "./schema"
import * as Mongoose from "mongoose"
class user {
    // Schema:Mongoose.Schema;    
    constructor(){
    //   this.Schema = schema()
    }
    
    public get_user(user_naem:string,callback : (error:Error,result:any)=> void){
        schema.findOne({ 'name': 'tiep' }, function (err, user) {
            callback(err,user)
        })
    }
}

let User =  new user()

export default User
import * as Mongoose from "mongoose"

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    
    constructor () {
        DataAccess.connect();
    }
    
    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connect mongodb.");
        });

        this.mongooseInstance = Mongoose.connect('mongodb://localhost/test');
       return this.mongooseInstance;
    }
    
}

DataAccess.connect();
export default DataAccess;

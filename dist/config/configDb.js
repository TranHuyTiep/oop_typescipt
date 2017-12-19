"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connect mongodb.");
        });
        this.mongooseInstance = Mongoose.connect('mongodb://localhost/test');
        return this.mongooseInstance;
    }
}
DataAccess.connect();
exports.default = DataAccess;

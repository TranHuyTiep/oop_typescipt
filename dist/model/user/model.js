"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = require("./schema");
class user {
    // Schema:Mongoose.Schema;    
    constructor() {
        //   this.Schema = schema()
    }
    get_user(user_naem, callback) {
        schema.findOne({ 'name': 'tiep' }, function (err, user) {
            callback(err, user);
        });
    }
}
let User = new user();
exports.default = User;

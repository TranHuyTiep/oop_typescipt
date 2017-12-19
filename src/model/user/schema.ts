import * as DataAccess from "../../config/configDb"
import user_interface = require("../user/interface");

var mongoose = DataAccess.default.mongooseInstance;
var mongooseConnection = DataAccess.default.mongooseConnection;

class user {
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           power: {
               type: String,
               required: true
           },
           amountPeopleSaved: {
               type: Number,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model("cats", user.schema);
export = schema;
// var dog = new schema({ name: 'dog',power:'aaa',amountPeopleSaved:1222});
// dog.save(function (err:any) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('meow');
//     }
//   });
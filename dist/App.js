"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const index_1 = require("./controller/user/index");
const index_2 = require("./controller/api/index");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.router();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "ejs");
    }
    router() {
        let router = express.Router();
        this.express.use('/user/', index_1.default);
        this.express.use('/api/', index_2.default);
    }
}
exports.default = new App().express;

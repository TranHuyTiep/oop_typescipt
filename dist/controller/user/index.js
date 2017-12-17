"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class user {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    Getuser(req, res) {
        res.render('user', { name: 'Hello world' });
    }
    init() {
        this.router.get("/index", this.Getuser);
    }
}
exports.user = user;
const users = new user();
users.init();
exports.default = users.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_user = require("../../model/user/model");
class user {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    Getuser(req, res) {
        model_user.default.get_user('tiep', (erro, data) => {
            res.json({ name: data });
        });
    }
    init() {
        this.router.get("/index", this.Getuser);
    }
}
exports.user = user;
const users = new user();
users.init();
exports.default = users.router;

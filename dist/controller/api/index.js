"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class api {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getApi(req, res) {
        res.json({
            name: 'Tran Huy Tiep'
        });
    }
    init() {
        this.router.get('/index', this.getApi);
    }
}
exports.api = api;
const api_tions = new api();
api_tions.init();
exports.default = api_tions.router;

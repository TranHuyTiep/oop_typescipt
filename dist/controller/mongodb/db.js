"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class mongodb {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getApi(req, res, NextFunction) {
        res.json({
            name: 'Tran Huy Tiep'
        });
    }
    init() {
        this.router.get('/api', this.getApi);
    }
}
exports.mongodb = mongodb;
const mongodbTions = new mongodb();
mongodbTions.init();
exports.default = mongodbTions.router;

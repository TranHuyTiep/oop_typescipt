"use strict";
const HeroRepository = require("./../repository/HeroRepository");
class HeroBusiness {
    constructor() {
        this._heroRepository = new HeroRepository();
    }
    create(item, callback) {
        this._heroRepository.create(item, callback);
    }
    retrieve(callback) {
        this._heroRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._heroRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._heroRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._heroRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._heroRepository.findById(_id, callback);
    }
}
Object.seal(HeroBusiness);
module.exports = HeroBusiness;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("../utils/sharp"));
const validate_1 = __importDefault(require("../middlewares/validate"));
const routes = express_1.default.Router();
//the first is a String and the rest are integers
routes.get('/:img/:height/:width', (req, res) => {
    if (validate_1.default.validate(req.params.img, parseInt(req.params.height), parseInt(req.params.width))) {
        if (!validate_1.default.exists(req.params.img, parseInt(req.params.height), parseInt(req.params.width))) {
            (0, sharp_1.default)(req.params.img, parseInt(req.params.height), parseInt(req.params.width));
            setTimeout(() => {
                res.sendFile(`/${req.params.width} ${req.params.height} ${req.params.img}`, { root: './Thumnail' });
            }, 1000);
        }
        else {
            res.sendFile(`./Thumnail/${req.params} ${req.params.height} ${req.params.img}`, { root: './Thumnail' });
        }
    }
    else {
        res.send("Sorry, you've entered unvalid input");
    }
});
exports.default = {
    routes,
};

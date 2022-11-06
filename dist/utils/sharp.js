"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function resize(img, height, width) {
    (0, sharp_1.default)(`./images/${img}`)
        .resize({ width: width })
        .resize({ height: height })
        .toFile(`./Thumnail/${width} ${height} ${img}`)
        .catch((err) => {
        return false;
    });
    return true;
}
exports.default = resize;

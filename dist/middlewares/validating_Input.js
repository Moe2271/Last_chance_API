"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const image_size_1 = __importDefault(require("image-size"));
function validate(img, height, width) {
    let check = true;
    if (width <= 0 || height <= 0) {
        check = false;
    }
    //-----
    if (!fs_1.default.existsSync(`./images/${img}`)) {
        check = false;
    }
    return check;
}
//---------------------------------------------------
const exists = function does_exist(img, height, width) {
    if (fs_1.default.existsSync(`./Thumnail/${img}`)) {
        const dims = (0, image_size_1.default)(`./Thumnail/${img}`);
        if (width == dims.width && height == dims.height) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
exports.default = {
    validate,
    exists,
};

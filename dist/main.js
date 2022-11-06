"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 4000;
app.use('/', route_1.default.routes);
if (!fs_1.default.existsSync('./Thumnail')) {
    fs_1.default.mkdirSync('./Thumnail');
}
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/fjord.jpg/150/150`);
});
exports.default = app;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../main"));
const sharp_1 = __importDefault(require("../utils/sharp"));
const validate_1 = __importDefault(require("../middlewares/validate"));
const request = (0, supertest_1.default)(main_1.default);
describe('Test endpoint responses', () => {
    it('path correctness', () => __awaiter(void 0, void 0, void 0, function* () {
        const endpoint = '/fjord/250/250';
        const response = yield request.get(endpoint);
        expect(response.status).toBe(200);
    }));
    it('sharp file testing', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = (0, sharp_1.default)('fjord.jpg', 230, 100);
        expect(response).toBe(true);
    }));
    it('Input Validation', () => {
        const response = validate_1.default.exists('fjord.jpg', 700, 700);
        expect(response).toBe(false);
    });
});

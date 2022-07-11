"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Inferência de tipos
function getUsername() {
    return 'jaozin';
}
// Hard Coded
function getUsername2() {
    return '3';
}
// Inferência de tipos: string
const username = 'jaozin';
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.listen(3000);

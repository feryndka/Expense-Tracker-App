"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenseRouter_1 = __importDefault(require("./router/expenseRouter"));
const app = (0, express_1.default)();
const PORT = 4400;
app.use("/expense", expenseRouter_1.default);
app.listen(PORT, () => {
    console.log("Application run on port :", PORT);
});

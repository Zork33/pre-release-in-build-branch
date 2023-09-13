"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
const dotenv = require("dotenv");
dotenv.config();
const sum = (a, b) => {
    return a + b;
};
exports.sum = sum;
//# sourceMappingURL=app.js.map
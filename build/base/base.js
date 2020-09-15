"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("./config"));
const conect = mysql_1.default.createPool(config_1.default.base);
conect.getConnection((err, connection) => {
    try {
        connection.release();
        console.log("Conexion Correcta");
    }
    catch (_a) {
        console.log(err);
    }
});
exports.default = conect;

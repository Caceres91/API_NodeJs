"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", userController_1.default.getAll);
        this.router.get("/:id", userController_1.default.get);
        this.router.post("/", userController_1.default.create);
        this.router.put("/:id", userController_1.default.update);
        this.router.delete("/:id", userController_1.default.datele);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;

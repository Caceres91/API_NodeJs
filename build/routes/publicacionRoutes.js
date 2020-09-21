"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionController_1 = __importDefault(require("../controller/publicacionController"));
class PublicacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", publicacionController_1.default.getAll);
        this.router.get("/:id", publicacionController_1.default.get);
        this.router.post("/", publicacionController_1.default.create);
        this.router.put("/:id", publicacionController_1.default.update);
        this.router.delete("/:id", publicacionController_1.default.datele);
    }
}
const publicacionRoutes = new PublicacionRoutes();
exports.default = publicacionRoutes.router;

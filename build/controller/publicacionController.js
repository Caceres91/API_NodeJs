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
const base_1 = __importDefault(require("../base/base"));
class PublicacionController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield base_1.default.query("SELECT * FROM publicaciones", (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                        console.log(JSON.stringify(rows));
                    }
                    else {
                        res.status(500).send(err.sqlMessage);
                        console.log(JSON.stringify(err.sqlMessage));
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const all = yield base_1.default.query("SELECT * FROM publicaciones WHERE id = ?", [id], (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                        console.log(JSON.stringify(rows));
                    }
                    else {
                        res.status(500).send(err.sqlMessage);
                        console.log(JSON.stringify(err.sqlMessage));
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nueva = req.body;
                console.log(nueva);
                yield base_1.default.query("INSERT INTO publicaciones set ?", [req.body], (err) => {
                    if (!err) {
                        res.status(200).send({ message: "Publicacion creada" });
                        console.log(JSON.stringify(nueva));
                    }
                    else {
                        res.status(500).send(err.sqlMessage);
                        console.log(JSON.stringify(err.sqlMessage));
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const all = yield base_1.default.query("UPDATE publicaciones set ? WHERE id = ?", [req.body, id], (err, rows) => {
                    if (!err) {
                        res.status(200).send({ message: 'Update' });
                        console.log(JSON.stringify(rows));
                    }
                    else {
                        res.status(500).send(err.sqlMessage);
                        console.log(JSON.stringify(err.sqlMessage));
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    datele(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const all = yield base_1.default.query("DELETE FROM publicaciones WHERE id = ?", [id], (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                        console.log(JSON.stringify(rows));
                    }
                    else {
                        res.status(500).send(err.sqlMessage);
                        console.log(JSON.stringify(err.sqlMessage));
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const publicacionController = new PublicacionController();
exports.default = publicacionController;

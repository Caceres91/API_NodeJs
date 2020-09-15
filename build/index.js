"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.httapp = new http_1.default.Server(this.app);
        this.socke = socket_io_1.default.listen(this.httapp);
        this.config();
        this.routes();
    }
    ;
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/rest/user", userRoutes_1.default);
    }
    start() {
        this.httapp.listen(this.app.get('port'), () => {
            console.log('API NODEJS', this.app.get('port'));
        });
    }
}
const servidor = new Server();
servidor.start();

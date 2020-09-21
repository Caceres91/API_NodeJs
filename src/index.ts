import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';

import userRoutes from './routes/userRoutes';
import publicionRoutes from './routes/publicacionRoutes';

class Server {;
    public app: Application;
    public httapp: any;
    public socke: any;
    constructor(){
        this.app = express();
        this.httapp = new http.Server(this.app);
        this.socke = io.listen(this.httapp);
        this.config();
        this.routes();
    }

        config(): void{
            this.app.set('port', process.env.PORT || 3000);
            this.app.use(morgan("dev"));
            this.app.use(cors());
            this.app.use(express.json());
            this.app.use(express.urlencoded({extended: false}));
        }

        routes(): void{
            this.app.use("/rest/user", userRoutes);
            this.app.use("/api/publicacion", publicionRoutes);
        }

        start(){
            this.socke.on('connection', (socket: io.Socket) => {
                console.log('usuario conectado');
                socket.on('message', (msg: string) => {
                    console.log(msg);
                    socket.broadcast.emit('messages', msg);
                })
            });
            this.httapp.listen(this.app.get('port'), () => {
            console.log('API NODEJS', this.app.get('port'));
            });
        }
}

const servidor = new Server();
servidor.start();
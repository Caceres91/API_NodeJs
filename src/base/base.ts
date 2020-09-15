import mysql from 'mysql';
import { Connection } from 'promise-mysql';

import config from './config';

const conect = mysql.createPool(config.base);

conect.getConnection((err, connection) => {
    try {
        connection.release();
        console.log("Conexion Correcta");
    } catch {
        console.log(err);
    }
});

export default conect;
import { Request, Response } from 'express';

import data from '../base/base';

class PublicacionController{
    public async getAll(req: Request, res: Response){
        try {
            const all = await data.query("SELECT * FROM publicaciones", (err, rows) => {
                if(!err){
                    res.status(200).send(rows);
                    console.log(JSON.stringify(rows));
                }else {
                    res.status(500).send(err.sqlMessage);
                    console.log(JSON.stringify(err.sqlMessage));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async get(req: Request, res: Response){
        try {
            const { id } = req.params;
            const all = await data.query("SELECT * FROM publicaciones WHERE id = ?", [id],(err, rows) => {
                if(!err){
                    res.status(200).send(rows);
                    console.log(JSON.stringify(rows));
                }else {
                    res.status(500).send(err.sqlMessage);
                    console.log(JSON.stringify(err.sqlMessage));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async create(req: Request, res: Response){
        try {
            const nueva = req.body;
            console.log(nueva);
            await data.query("INSERT INTO publicaciones set ?", [req.body], (err) => {
                if(!err){
                    res.status(200).send({message: "Publicacion creada"});
                    console.log(JSON.stringify(nueva));
                }else {
                    res.status(500).send(err.sqlMessage);
                    console.log(JSON.stringify(err.sqlMessage));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const all = await data.query("UPDATE publicaciones set ? WHERE id = ?", [req.body, id], (err, rows) => {
                if(!err){
                    res.status(200).send({message: 'Update'});
                    console.log(JSON.stringify(rows));
                }else {
                    res.status(500).send(err.sqlMessage);
                    console.log(JSON.stringify(err.sqlMessage));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async datele(req: Request, res: Response){
        try {
            const { id } = req.params;
            const all = await data.query("DELETE FROM publicaciones WHERE id = ?", [id], (err, rows) => {
                if(!err){
                    res.status(200).send(rows);
                    console.log(JSON.stringify(rows));
                }else {
                    res.status(500).send(err.sqlMessage);
                    console.log(JSON.stringify(err.sqlMessage));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

const publicacionController = new PublicacionController();
export default publicacionController;
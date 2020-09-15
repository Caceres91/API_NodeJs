import { Request, Response } from 'express';

import data from '../base/base';

class UserController{
    public async getAll(req: Request, res: Response){
        try {
            const all = await data.query("SELECT * FROM user", (err, rows) => {
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
            const all = await data.query("SELECT * FROM user WHERE id = ?", [id],(err, rows) => {
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
            await data.query("INSERT INTO user set ?", [req.body], (err) => {
                if(!err){
                    res.status(200).send({message: "Persona creada"});
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
            const all = await data.query("UPDATE user set ? WHERE id = ?", [req.body, id], (err, rows) => {
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

    public async datele(req: Request, res: Response){
        try {
            const { id } = req.params;
            const all = await data.query("DELETE FROM user WHERE id = ?", [id], (err, rows) => {
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

const userController = new UserController();
export default userController;
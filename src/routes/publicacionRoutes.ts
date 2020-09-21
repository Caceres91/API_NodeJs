import { Router } from 'express';

import publicacionController from '../controller/publicacionController';

class PublicacionRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get("/", publicacionController.getAll);
        this.router.get("/:id", publicacionController.get);
        this.router.post("/", publicacionController.create);
        this.router.put("/:id", publicacionController.update);
        this.router.delete("/:id", publicacionController.datele);
    }

}

const publicacionRoutes = new PublicacionRoutes();
export default publicacionRoutes.router;
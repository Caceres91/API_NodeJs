import { Router } from 'express';

import userController from '../controller/userController';

class UserRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get("/", userController.getAll);
        this.router.get("/:id", userController.get);
        this.router.post("/", userController.create);
        this.router.put("/:id", userController.update);
        this.router.delete("/:id", userController.datele);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;
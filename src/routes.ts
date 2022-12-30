import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router }
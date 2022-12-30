import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../authenticateUser/AuthenticateUserUseCase";

class AuthenticateUserController {

    async handle(request: Request, response: Response ){

        const { username, password } = request.body;

        const authencticateUserUseCase = new AuthenticateUserUseCase();

        const token = await authencticateUserUseCase.execute({
            username,
            password
        });

        return response.status(200).json(token);

    }
}

export { AuthenticateUserController }
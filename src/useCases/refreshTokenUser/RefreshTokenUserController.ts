import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";

class RefreshTokenUserController {

    async handle(request: Request, response: Response){

        const { refresh_token } = request.body;

        const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

        const token = await refreshTokenUserUseCase.execute(refresh_token);
        console.log(token);

        return response.status(200).json(token);

    }

}

export { RefreshTokenUserController }
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization;
    //se o token não foi passado
    if(!authToken){
        return response.status(401).json({
            message: "Token is missing!"
        });
    }

    //como a requisição vai ter a palavra Bearer mais o token, é necessário separar esses valores e pegar realmente somente o token
    //por isso é usado o split para separa a palavra Bearer do token que é passado juntamente
    const [, token] = authToken.split(" ");

    try{
        verify(token, "secrete-key-app");
        return next();
    }catch(err){
        return response.status(401).json({
            message: "token invalid!"
        });
    }

}
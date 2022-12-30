import { IRequest } from '../../interfaces/IRequest';
import { client } from '../../prisma/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthenticateUserUseCase{
    async execute({ username, password }:IRequest){

        //Verificar se usuario existe
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username
            }
        });

        if(!userAlreadyExists){
            throw new Error('User or password incorrect!');
        }

        //verificar se a senha está correta
        const passwordMatch = await compare(password, userAlreadyExists.password);
        

        if(!passwordMatch){
            throw new Error('User or password incorrect!');
        }

        //gerar token do usuario
        //primeiro parametro passar o payload, que poderia passar user_id, usuario
        const token = sign({}, "secrete-key-app", {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });

        return { token }

    }
}

export { AuthenticateUserUseCase }
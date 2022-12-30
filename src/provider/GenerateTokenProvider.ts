import { sign } from "jsonwebtoken";

class GenerateTokenProvider {

    async execute(userId: string){
        const token = sign({}, "secrete-key-app", {
            subject: userId,
            expiresIn: "50s"
        });

        return token;
    }

}

export { GenerateTokenProvider }
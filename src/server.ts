import "express-async-errors";
import express, {Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
//aqui é para trabalhar com as rotas em um arquivo
app.use(router);
//aqui é para tratar as excessoes de error
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
        status: "Error",
        message: error.message
    });
});

const PORT = 3535;
app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
});
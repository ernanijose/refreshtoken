import "express-async-errors";
import express, {Request, Response, NextFunction } from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();

//aqui é para criar uma rota para documentação, então que vier /api-docs é referente a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
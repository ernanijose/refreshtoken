import express from "express";

const app = express();

const PORT = 3535;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});
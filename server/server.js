import express from "express";
import getConnection from "../database/db.js";


const app = express();
app.use(express.json());
const port = 3000;

app.get("/",async (req,res)=>{
   const connection =  await getConnection()
   const result = await connection.query("select * from noticias");
   res.json(result[0]);
})

app.post("/inserir", async (req, res)=>{
    const { titulo, descricao, data } = req.body;

    const connection = await getConnection()
    const result = await connection.query("insert into noticias (titulo, descricao, data) values (?, ?, ?)", [titulo, descricao, data]);

    res.json({
        message: "Notícia inserida com sucesso!",
        result: result
    });
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

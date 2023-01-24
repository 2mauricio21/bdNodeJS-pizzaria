import express, { json } from "express";
import PizzaController from "./app/controllers/PizzaController.js";

const app = express();

//leitura do json
app.use(express.json());
//adicionar pizza
app.post("/pizzas", PizzaController.store);
//listar todas as pizzas
app.get("/pizzas", PizzaController.index);
//buscar pizza por ID
app.get("/pizzas/:id", PizzaController.show);
//atualizar pizzas
app.put("/pizzas/:id", PizzaController.update);
//deletar pizzas
app.delete("/pizzas/:id", PizzaController.delete);


export default app;

import express from "express";
const app = express();

//leitura do json
app.use(express.json());

//mock
const pizzas = [
  { id: 1, sabor: "Queijo", tamanho: "G" },
  { id: 2, sabor: "Mussarela", tamanho: "G" },
  { id: 3, sabor: "Frango com Catupiri", tamanho: "G" },
  { id: 4, sabor: "Baiana", tamanho: "G" },
];

//FUNÇÕES
function buscarPizzaPorID(id) {
  return pizzas.filter((pizza) => pizza.id == id);
}

function buscarIndexPizza(id) {
  return pizzas.findIndex((pizza) => pizza.id == id);
}

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//listar todas as pizzas
app.get("/pizzas", (req, res) => {
  res.status(200).send(pizzas);
});

//adicionar pizza
app.post("/pizzas", (req, res) => {
  pizzas.push(req.body);
  res.status(201).send("Pizza cadastrada com sucesso");
});

//buscar pizza por ID
app.get("/pizzas/:id", (req, res) => {
  const row = buscarPizzaPorID(req.params.id);
  res.status(200).json(row[0]);
});

//deletar pizzas
app.delete("/pizzas/:id", (req, res) => {
  const index = buscarIndexPizza(req.params.id);
  pizzas.splice(index, 1);
  res.status(200).send(`Pizza de id ${req.params.id} deletada`);
});

//atualizar pizzas
app.put("/pizzas/:id", (req, res) => {
  const index = buscarIndexPizza(req.params.id);
  pizzas[index].sabor = req.body.sabor;
  pizzas[index].tamanho = req.body.tamanho;
  res.json(pizzas);
});

export default app;

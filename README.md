# 🍕 Pizzaria API — Back-end com Node.js

API RESTful para gerenciamento de pizzas, desenvolvida com **Node.js**, **Express** e **MySQL**, seguindo a arquitetura **MVC**.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Como Executar](#como-executar)
- [Endpoints](#endpoints)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Vídeos de Referência](#vídeos-de-referência)

---

## Sobre o Projeto

Este projeto é uma API back-end para uma pizzaria, com operações completas de **CRUD** (Create, Read, Update, Delete) para o recurso de pizzas. O desenvolvimento foi feito de forma incremental, partindo das primeiras rotas até a implementação do padrão **MVC** (Model, View, Controller), com persistência de dados em banco relacional MySQL.

---

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Node.js    | ES Modules (`"type": "module"`) |
| Express    | ^4.18.2 |
| MySQL      | ^2.18.1 |
| Nodemon    | ^2.0.20 (dev) |

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) *(opcional, para gerenciar o banco visualmente)*

---

## Configuração do Banco de Dados

1. Inicie o MySQL Server na porta padrão `3306`.
2. Crie o banco de dados e a tabela:

```sql
CREATE DATABASE bdpizzaria;

USE bdpizzaria;

CREATE TABLE pizzas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  sabor VARCHAR(100),
  preco DECIMAL(10, 2)
);
```

3. As credenciais padrão utilizadas na conexão são:
   - **Usuário:** `root`
   - **Senha:** `root`

> ⚠️ Para produção, utilize variáveis de ambiente para armazenar as credenciais do banco.

---

## Como Executar

```bash
# Clone o repositório
git clone https://github.com/2mauricio21/bdNodeJS-pizzaria.git

# Acesse a pasta do projeto
cd bdNodeJS-pizzaria

# Instale as dependências
npm install

# Inicie o servidor em modo de desenvolvimento (com auto-reload)
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

---

## Endpoints

Base URL: `http://localhost:3000`

| Método | Rota          | Descrição                  |
|--------|---------------|----------------------------|
| POST   | `/pizzas`     | Cadastrar uma nova pizza   |
| GET    | `/pizzas`     | Listar todas as pizzas     |
| GET    | `/pizzas/:id` | Buscar uma pizza pelo ID   |
| PUT    | `/pizzas/:id` | Atualizar uma pizza pelo ID|
| DELETE | `/pizzas/:id` | Deletar uma pizza pelo ID  |

### Exemplo de Body (POST / PUT)

```json
{
  "nome": "Margherita",
  "sabor": "Tomate e Mussarela",
  "preco": 39.90
}
```

---

## Estrutura de Pastas

```
bdNodeJS-pizzaria/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   │   └── PizzaController.js   # Lógica das requisições HTTP
│   │   ├── database/
│   │   │   └── conexao.js           # Conexão e helper de query MySQL
│   │   └── repositories/
│   │       └── PizzaRepository.js   # Queries SQL (CRUD)
│   └── app.js                       # Configuração do Express e rotas
├── server.js                        # Ponto de entrada da aplicação
├── package.json
└── README.md
```

---

## Vídeos de Referência

Acompanhe o processo de criação do projeto:

- 📹 [Vídeo 1 — Primeiras rotas e configuração](https://youtu.be/KSgH0Y7ngS8)
- 📹 [Vídeo 2 — Finalização com MVC e banco de dados](https://youtu.be/tdNas_QuK7k)

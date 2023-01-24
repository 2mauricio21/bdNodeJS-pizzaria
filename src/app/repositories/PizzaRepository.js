import { consuta } from "../database/conexao.js";

class PizzaRepository {
  create(pizza) {
    const sql = "INSERT INTO pizzas SET ?;";
    return consuta(sql, pizza, 'Nao foi possivel criar')
  }

  findAll() {
    const sql = "SELECT * FROM pizzas;";
    return consuta(sql, 'Nao foi possivel listar')
    
  }

  findById(id) {
    const sql = "SELECT * FROM pizzas WHERE id=? ;";
    return consuta(sql, id, 'Nao foi possivel listar')
  }

  update(pizza, id) {
    const sql = "UPDATE pizzas SET ? WHERE id=? ;";
    return consuta(sql, [pizza, id], 'Nao foi possivel atualizar')
  }

  delete(id) {
    const sql = "DELETE FROM pizzas WHERE id=? ;";
    return consuta(sql, id, 'Nao foi possivel deletar')
  }
}

export default new PizzaRepository();

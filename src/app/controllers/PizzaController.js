import PizzaRepository from "../repositories/PizzaRepository.js";

class PizzaController {

  async store (req, res) {
    const pizza = req.body;
    const row = await PizzaRepository.create(pizza)
    res.json(row)
  }

  async index (req, res) {
    const row = await PizzaRepository.findAll()
    res.json(row)
  }

  async show (req, res) {
    const id = req.params.id;
    const row = await PizzaRepository.findById(id)
    res.json(row)
  }

  async update (req, res) {
    const pizza = req.body;
    const id = req.params.id;
    const row = await PizzaRepository.update(pizza, id)
    res.json(row)
  }

  async delete (req, res) {
    const id = req.params.id;
    const row = await PizzaRepository.delete(id)
    res.json(row)
  }

}

export default new PizzaController
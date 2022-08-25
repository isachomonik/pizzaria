// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render('index.ejs', {cardapio: pizzas});
    },
    show: (req, res) => {
        let {id} = req.params
        let pizza = pizzas.find(p => p.id == id);
        // res.send(pizza)

        res.render('pizza.ejs', {pizza})

        
    },
    search: (req, res) => {
    }

}
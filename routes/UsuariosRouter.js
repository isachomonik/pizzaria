const UsuariosController = require('../controllers/UsuariosController');

const UsuariosRouter = require('express').Router();

UsuariosRouter.get('/entrar', UsuariosController.showEntrar)
UsuariosRouter.post('/add', UsuariosController.add)

module.exports = UsuariosRouter;
const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController')

const { loginRequire } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index);

// Rotas de Login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)


//rotas  de contato
route.get('/contato/index', loginRequire, contatoController.index)
route.post('/contato/register', loginRequire, contatoController.register)
route.get('/contato/index/:id', loginRequire, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequire, contatoController.edit)
route.get('/contato/delete/:id', loginRequire, contatoController.delete)

module.exports = route;

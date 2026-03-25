const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

// Rotas principais
router.get('/', controller.home);          
router.get('/sobre', controller.sobre);     
router.get('/contato', controller.contato); 

// Rotas do CRUD de produtos
router.get('/produtos', controller.produtos);                    // listar produtos
router.post('/produtos/adicionar', controller.adicionar);        // add
router.get('/produtos/excluir/:id', controller.excluir);         // excluir
router.get('/produtos/editar/:id', controller.editarForm);       // form de edição
router.post('/produtos/editar/:id', controller.editar);          // salvar edição

module.exports = router;
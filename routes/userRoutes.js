const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

// Rotas principais
router.get('/', controller.homePage);          
router.get('/sobre', controller.aboutPage);     
router.get('/contato', controller.contactPage); 

// Rotas do CRUD de produtos
// router.get = define uma rota que responde a requisiçoes do tipo GET
// post = enviando dados
router.get('/produtos', controller.itemsList);                    // listar produtos
router.post('/produtos/adicionar', controller.addItem);        // add
router.get('/produtos/excluir/:id', controller.deleteItem);         // excluir
router.get('/produtos/editar/:id', controller.loadEditForm);       // form de edição
router.post('/produtos/editar/:id', controller.saveEdit);          // salvar edição

module.exports = router;

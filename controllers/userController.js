const dataManager = require('../models/userModel');

// exibe a tela principal
exports.homePage = (req, res) => {
    res.render('home');
};

exports.aboutPage = (req, res) => {
    res.render('sobre');
};

exports.contactPage = (req, res) => {
    res.render('contato');
};

exports.itemsList = (req, res) => {
    const allItems = dataManager.getAll();
    res.render('CRUD', { produtos: allItems, produtoEditar: null });
};

// registra um novo item no sistema
exports.addItem = (req, res) => {
    const { nome, preco } = req.body;
    
    dataManager.add({
        id: Date.now(),
        nome: nome,
        preco: parseFloat(preco)
    });
    
    res.redirect('/produtos');
};

// remove um item do sistema
exports.deleteItem = (req, res) => {
    const itemId = req.params.id;
    dataManager.remove(itemId);
    res.redirect('/produtos');
};

// carrega os dados do item para edição
exports.loadEditForm = (req, res) => {
    const itemId = req.params.id;
    const itemData = dataManager.getById(itemId);
    const allItems = dataManager.getAll();
    
    res.render('CRUD', { 
        produtos: allItems, 
        produtoEditar: itemData 
    });
};

// salva as alterações feitas no item
exports.saveEdit = (req, res) => {
    const itemId = req.params.id;
    const { nome, preco } = req.body;
    
    dataManager.update(itemId, nome, parseFloat(preco));
    res.redirect('/produtos');
};
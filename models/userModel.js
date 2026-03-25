let produtos = []; // array para armazenar produtos em memória

// retorna todos os produtos
function getAll() {
    return produtos;
}

// add um novo produto
function add(produto) {
    produtos.push(produto);
    return produto;
}

// remove produto pelo ID
function remove(id) {
    const idNumber = parseInt(id); // converte para número
    produtos = produtos.filter(p => p.id != idNumber);
}

// busca produto pelo ID
function getById(id) {
    const idNumber = parseInt(id);
    return produtos.find(p => p.id === idNumber);
}

// atualiza produto
function update(id, nome, preco) {
    const idNumber = parseInt(id);
    const produto = produtos.find(p => p.id === idNumber);
    if (produto) { // verifica se produto existe
        produto.nome = nome;
        produto.preco = preco;
        return true;
    }
    return false;
}

module.exports = { getAll, add, remove, getById, update };
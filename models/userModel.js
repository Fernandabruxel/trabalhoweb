let produtos = []; // array para armazenar produtos em memória

// retorna todos os produtos
function getAll() { //getAll() - Retorna TODOS os produtos cadastrados
    return produtos;
}

// add um novo produto
function add(produto) {
    produtos.push(produto); //push = coloca o novo produto no final do array
    return produto;
}

// remove produto pelo ID
function remove(id) {
    const idNumber = parseInt(id); // converte para número
    // filter cria um NOVO array sem o produto que tem o ID informado
    // != mantém so os que nao sao o que queremos remover
    produtos = produtos.filter(p => p.id != idNumber);
}

// busca produto pelo ID
function getById(id) {
    const idNumber = parseInt(id);
    // find procura o primeiro produto que tenha o ID igual ao informado
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
// module.exports = "tornar público" o que está dentro das chaves
module.exports = { getAll, add, remove, getById, update };

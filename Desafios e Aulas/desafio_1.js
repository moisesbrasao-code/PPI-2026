class Product {
  constructor(name, storage, ram, price, qty, category) {
    this.name = name;
    this.storage = storage;
    this.ram = ram;
    this.price = price;
    this.qty = qty;
    this.category = category;
  }
}

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria
print
*/

/* =========================================
   RESOLUÇÃO: DESAFIO 1
========================================= */

const p1 = new Product('iPhone', 256, 16, 5000, 10, 'Celular');
const p2 = new Product('iPad', 512, 16, 8000, 20, 'Tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook');
const p4 = new Product('iPhone Pro Max', 256, 16, 7000, 15, 'Celular');
const p5 = new Product('iPad Pro', 512, 16, 10000, 25, 'Tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook');

const estoque = [p1, p2, p3, p4, p5, p6];
console.log(estoque);

// a) Valor total de todos os produtos em estoque
// Multiplicamos o preço (price) pela quantidade (qty) de cada item e somamos tudo.
const valorTotal = estoque.reduce((acumulador, produto) => {
  return acumulador + produto.price * produto.qty;
}, 0); // O '0' é o valor inicial do acumulador

console.log('A) Valor total em estoque: R$', valorTotal);

// b) Ordene os produtos por nome (crescente/decrescente)
// Utilizando toSorted() para não alterar o array original e localeCompare para strings.
const orderNomesCrescente = estoque.toSorted((a, b) => a.name.localeCompare(b.name));
const orderNomesDecrescente = estoque.toSorted((a, b) => b.name.localeCompare(a.name));

console.log('B) Nomes Crescente:', orderNomesCrescente);
console.log('B) Nomes Decrescente:', orderNomesDecrescente);

// c) Ordene os produtos por preço (crescente/decrescente)
// Como são números, a lógica de subtração (a - b) vista em aula funciona perfeitamente.
const orderPrecosCrescente = estoque.toSorted((a, b) => a.price - b.price);
const orderPrecosDecrescente = estoque.toSorted((a, b) => b.price - a.price);

console.log('C) Preços Crescente:', orderPrecosCrescente);
console.log('C) Preços Decrescente:', orderPrecosDecrescente);

// d) Filtre produtos de acordo uma categoria
// Utilizando filter() para trazer todos os itens que combinem com a condição.
const categoriaDesejada = 'Tablet';
const produtosFiltrados = estoque.filter((produto) => produto.category === categoriaDesejada);

console.log(`D) Produtos da categoria '${categoriaDesejada}':`, produtosFiltrados);


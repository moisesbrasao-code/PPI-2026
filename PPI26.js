// # Aula 06/05 - Introdução ao JavaScript
console.log("Bem vindo a PPI");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; // Não pode mudar de valor
console.log(PI);

// Operadores Aritméticos
let x = 5 + 5;
let y = "5" + 5; // soma
let z = "Hello" + 5; // concatenação

console.log(x, y, z);
console.log(typeof x);

// Operadores relacionais
console.log('5' != 5); // Diferença
console.log('5' == 5); // Compara tipo OU valor
console.log('5' === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // incremento após o retorno do valor
console.log(x);
console.log(++x); // incremento antes do retorno do valor

// Operadores lógicos - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5+2*3<10) || false;
console.log (isExpression);

// if (condition) {
    
// } else {
    
// }

// Template strings
let text =
`React é tudo de bom!' \\
"Programar" é minha vida!/
Eu amo o IFRN`;
console.log (text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//Array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log (fruits.length); // Tamanho

console.log (fruits[0]);

// Insere elemento ao final da lista
fruits.push('Kiwi');
console.log('fruits');

// Remove e retorna o último elemento
console.log (fruits.pop());
console.log (fruits);

// Remove e retorna o primeiro elemento
console.log(fruits.shift());
console.log(fruits);

fruits.unshift ('Lemon');
console.log(fruits);

//  Argumento
fruits.splice(2, 0, 'Kiwi', 'Blueberry');
console.log(fruits);

fruits.splice(2,1);
console.log(fruits);

// Desafio - substituir apple por Kiwi
fruits.splice(3,1,'Kiwi');
console.log(fruits);

let index = fruits.indexOf('Kiwi');
console.log(index);

fruits.splice(index, 1, 'Apple');
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const numbers = [45,4,9,16,25];
console.log(numbers);

const numbers2 =[];
for (let i = 0; i < numbers.length; i++) {
    numbers2.push (numbers[i]*2) ;    
}
console.log(numbers);
console.log(numbers2);

function myFunction(value,index, array){
    return value *2;
};
const numbersMap = numbers.map(myFunction);
console.log (numbersMap);

con

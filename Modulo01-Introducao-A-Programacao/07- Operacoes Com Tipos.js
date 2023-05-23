//01 - Cifra em Reais
/*Crie uma função chamada retornaEmReais(num) que recebe um número e retorna esse número convertido para o formato "R$XXXX.XX". Por exemplo:
retornaEmReais(25.6) ==> "R$26.60"
retornaEmReais(100.5678) ==> "R$100.57"
*/

function retornaEmReais(num) {
  	const newNum = num.toFixed(2)  //Fixa em duas casas decimais o número 
    const emReais = "R$" + newNum;
    return emReais;
}; 

//02 - Caixa Alta e Caixa Baixa
/*
Crie uma função chamada caixaAlta(str), que recebe uma string e retorna essa string com todos os caracteres em letra maiúscula.
Crie em seguida a função caixaBaixa(str), que também recebe uma string e retorna essa string com todos os caracteres com letras minúsculas.
*/

function caixaAlta(str){
  return str.toUpperCase();
};

function caixaBaixa(str){
  return str.toLowerCase();
};

//03 Verifica caractere
/* Escreva uma função chamada contem(char, str), que recebe como parâmetro um caractere e uma string, e verifica se o caracter está contido na string.
Caso esse caracter exista na string a função deve retornar true e em caso contrário false. */

function contem(char, str){
  const resultado = str.includes(char);
  return resultado;
};

//01 - Vogal ou Consoante
/*
Crie uma função chamada verificaLetra(c), que recebe uma string de um caracter (uma letra) 
e retorna se a letra é uma "Vogal" ou uma "Consoante". Deve retornar uma dessas strings, 
inclusive com a primeira letra maiúscula.
*/

function verificaLetra(c){ //Solução com operadores lógicos
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u"){
    return "Vogal"
  } else {
    return "Consoante"
  }
};

//02 - Verifica Intervalo
/*
Escreva uma função chamada verifica25(x, y) que recebe dois números e verifica se o número 25 está contido no 
intervalo aberto (x, y), ou seja, o intervalo dos números estritamente maiores que x e estritamente menores que y. 
Essa função deve retornar true caso 25 esteja contido no intervalo e false caso contrário.
*/

function verifica25(x, y) {
  if (x < 25 && y > 25) {
    return true;
  }
  return false;
};

//03 - Raíz Exata
/*
Crie uma função chamada testeRaizExata() que recebe um número como parâmetro e calcula a raíz quadrada desse número e verifica se a raíz é exata ou não.
Se a raíz for exata retorne true, senão retorne false.
*/

function testeRaizExata(numero){
  let x = Math.sqrt(numero)
  if(Number.isInteger(x)){
    return true;
  }
  else{return false}
};

//04 - Update isLegal(age, country)
/*
A fictícia ONG que você ajudou no exercício do Módulo anterior, abriu duas novas sedes, em Portugal e no Egito. Mas esses novos países tem leis diferentes para permitir o consumo de álcool de seus cidadãos.

Em Portugal a idade legal para consumo de Cervejas e Vinhos é 16 anos, e as demais bebidas 18 anos. Já no Egito, a Cerveja é permitida a partir dos 18 anos, enquanto outras bebidas são permitidas apenas após os 21 anos.

A sua função isLegal(age, country), precisa ser atualizada para isLegal(age, country, drink = ""), para que ela possa receber esse novo parâmetro que indica qual a bebida que está sendo comprada.

Dica: Ao definir a função dessa forma: isLegal(age, country, drink = ""), estamos dizendo que ao chamar a função, caso não seja passado nenhum parâmetro indicando um valor para a variável drink, queremos que o valor de drink seja uma string vazia("").

Novamente observando nossa tabela, temos:

Brasil: 18 anos
EUA: 21 anos
Paraguai: 20 anos
Jamaica: 16 anos
Irã: nunca
Armênia: sem limite de idade
Portugal: cerveja ou vinho 16 anos, demais bebidas alcoólicas 18 anos
Egito: cerveja 18 anos, demais bebidas 21 anos


Obs: Para quesitos de testes, considere as strings dos nomes dos países sendo "brasil", "eua", "paraguai", "jamaica", "ira", "armenia", "portugal" e "egito".
*/

function isLegal(age, country, drink = ""){
  country = country.toLowerCase();
  if (country === "brasil" && age >= 18)
    return true;
  if (country === "eua" && age >= 21)
    return true;
  if (country === "paraguai" && age >= 20)
    return true;
  if (country === "jamaica" && age >= 16)
    return true;
  if (country === "portugal"){
    if(age >= 18)
    	return true;
    else if ((drink === "cerveja" || drink === "vinho") && age >= 16)
      return true;
    else 
      return false;
  }
  if (country === "egito"){
    if(age >= 21)
    	return true;
    else if (drink === "cerveja" && age >= 18)
      return true;
    else 
      return false;
  }
  if(country === "armenia"){
    return true;
  }
  return false;
}

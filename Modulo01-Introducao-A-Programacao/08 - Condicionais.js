//01 - Iguais ou Diferentes
/*
Crie uma função chamada comparaNumeros(num1, num2), a função deve retornar "IGUAIS" caso os números sejam iguais, ou "DIFERENTES" caso os números sejam diferentes.
*/
function comparaNumeros(num1, num2) {
    if (num1 === num2) {
        return "IGUAIS";
    } else {
        return "DIFERENTES";
    }
}; 

//02 - Baskhara
/* 
Crie uma função chamada calculaUmaRaiz(a, b, c, sinal) que vai receber os parâmetros a, b e c que representam respectivamente os coeficentes de uma equação do segundo grau da forma:

E que recebe também o parâmetro booleano sinal. Esse parâmetro vai definir qual das duas raízes estaremos calculando.

Se sinal = true, então devemos calcular a raíz positiva da equação de Baskhara:

Se sinal = false, então devemos calcular a raíz negativa da equação de Baskhara:

Sua função deve retornar o valor da raíz desejada corretamente.
*/
function calculaUmaRaiz(a, b, c, sinal){
  if (sinal === true){
    const delta = Math.sqrt(b*b-4*a*c);
    const raizPositiva = (-b+delta)/(2*a);
    return raizPositiva;
  } else {
    const delta = Math.sqrt((b*b-4*a*c));
    const raizNegativa = (-b-delta)/(2*a);
    return raizNegativa;
  }
};

//Idade legal para consumo de bebidas alcoólicas
/*
Imagine que você trabalhe para uma ONG que estuda o consumo de alcool entre adolescentes, e essa ONG tem base em 6 países diferentes Brasil, EUA, Paraguai, Jamaica, Irã e Armênia.

Você deve criar uma função chamada isLegal(age, country) que receba a idade de uma pessoa e o nome do seu país de origem. Essa função deve retornar true caso a pessoa tenha autorização legal para ingerir bebidas alcoólicas naquele país, ou false em caso contrário. Utilize as informações abaixo:

Tabela de Países e suas respectivas idades legais para consumo de bebida alcoólicas:

Brasil: 18 anos
EUA: 21 anos
Paraguai: 20 anos
Jamaica: 16 anos
Irã: nunca
Armênia: sem limite de idade


Obs: Considere as strings enviadas por parâmetro na função da seguinte forma: "Brasil", "EUA", "Paraguai", "Jamaica", "Irã", "Armênia"
*/

function isLegal(age, country){
  if (country === "Armênia"){
    return true;
  }
  if (age >= 16){
    if (country === "Jamaica"){
      return true;
    } 
  }
  if (age >= 18){
    if (country === "Brasil"){
      return true;
    }
  }
  if (age >= 20){
    if (country === "Paraguai"){
      return true;
    }
  }
  if (age >= 21){
    if (country === "EUA"){
      return true;
    }
  }
  return false
};

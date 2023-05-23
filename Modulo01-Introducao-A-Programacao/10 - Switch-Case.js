//01 - Retorna o Mês
/*
Crie uma função chamada retornaMes(num) que recebe um número de 1 a 12 como parâmetro, e retorna uma string com o nome do respectivo mês que esse número representa no calendário gregoriano.
Essa função deve utilizar a estrutura Switch Case.
*/
function retornaMes(num) {
  let mes = "";
  switch (num) {
    case 1:
      mes = "janeiro";
      break;
    case 2:
      mes = "fevereiro";
      break;
    case 3:
      mes = "março";
      break;
    case 4:
      mes = "abril";
      break;
    case 5:
      mes = "maio";
      break;
    case 6:
      mes = "junho";
      break;
    case 7:
      mes = "julho";
      break;
    case 8:
      mes = "agosto";
      break;
    case 9:
      mes = "setembro";
      break;
    case 10:
      mes = "outubro";
      break;
    case 11:
      mes = "novembro";
      break;
    case 12:
      mes = "dezembro";
      break;
    default:
      return "Número desconhecido";
  }
  return mes;
};

//02 - Palavra com vogal
/*
Escreva uma função que utilize a estrutura Switch/Case chamada retornaPalavra(char). Essa função recebe uma vogal minúscula, 
e deve retornar uma palavra que se inicia com aquela vogal. Na sua estrutura Switch/Case adicione uma exceção que responda com 
a string "Não é vogal" caso a função receba um caracter que não é vogal.
*/
function retornaPalavra(char){
  switch(char){
    case "a":
      return "Avião";
    case "e":
      return "Elefante";
    case "i":
      return "Internacional";
    case "o":
      return "Onda";
    case "u":
      return "Unicórnio";
    default:
      return "Não é vogal";
  }
};

//03 - Cores do Arco -íris
/*
A luz ao atravessar partículas de água na atmosfera pode sofrer refração e gerar lindos arco-íris no céu. Os arco-íris são formados por essas cores na seguinte ordem:

1 - Vermelho

2 - Laranja

3 - Amarelo

4 - Verde

5 - Azul

6 - Anil

7 - Violeta



Escreva uma função que utilize a estrutura Switch/Case, chamada corDoArcoIris(cor), que recebe uma string contendo o nome de uma das sete cores do arco-íris e retorna o número dessa cor. Caso essa função receba algo diferente dessas cores, retorne a string "Não é uma cor do arco-íris".

Cuidado! A string está representando um input de um usuário e pode possuir diferentes formatos (letras maiúsculas misturadas com minúsculas):

"Vermelho" / "vermelho" / "VERMELHO"
"LAranja" / "Laranja" / "laranja"
...
*/
function corDoArcoIris(cor){
  let num;
  switch(cor.toLowerCase()){
    case "vermelho":
      num = 1;
      break;
    case "laranja":
      num = 2;
      break;
    case "amarelo":
      num = 3;
      break;
    case "verde":
      num = 4;
      break;
    case "azul":
      num = 5;
      break;
    case "anil":
      num = 6;
      break;
    case "violeta":
      num = 7;
      break;
    default:
      num = "Não é uma cor do arco-íris";
  }
  return num;
};



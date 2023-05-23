//01 - Mude o tipo
/*
Altere o código da função ao lado de uma forma que ela continue retornando 47, mas retorne no tipo string.
*/

function retornaStr(){
  const str = 47;
  return String(str);
};

//02 - Transforma em Número
/*
Crie uma função chamada converteParaNumber(texto), que vai receber uma estrutura de texto numérica como parâmetro e 
deve retornar esse texto transformado para o tipo number. Se o texto não puder ser interpretado como número, retorne NaN
*/
function converteParaNumber(texto){
  return Number(texto);
};

//03 - Retorna Tipo
/*
Crie uma função chamada retornaTipo(entrada), que recebe um parâmetro e consegue retornar corretamente o tipo desse parâmetro.
*/
function retornaTipo(entrada){
  return typeof(entrada);
};

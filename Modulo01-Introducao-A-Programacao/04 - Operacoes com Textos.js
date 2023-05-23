//01 - União de Empresas
/*Crie uma função chamada uneEmpresas(nomeA, nomeB) que recebe dois nomes de empresas e une eles seguindo o modelo:
Se nomeA = "Empresa A" e nomeB = "Empresa B", então o resultado deve ser:
"Empresa A & Empresa B S.A."*/

function uneEmpresas(nomeA, nomeB){
  return (nomeA +" & "+ nomeB +" S.A.")
};

//02 - Calcula Média
/*Crie uma função chamada getMedia(x, y), sabendo que ela recebe dois números como parâmetro e calcula a média entre esses números.
Sugerimos a utilização da sintática de Template Strings (que consegue intercalar variáveis dentro de strings) para fazer com que essa função retorne:

"(x + y)/2 = #"

Onde # representa a média que deve ser calculada com duas casas decimais e, x e y devem ser substituídos pelos respectivos valores de entrada.*/

function getMedia(x, y){
  media=(x + y)/2;
  return ("("+x+" + "+y+")/2 ="+ media.toFixed(2));
};

//03 - Retorna Tabuada
/*Escreva uma função mostraTabuada(num) capaz de receber um valor, e mostrar a tabuada desse número de 1 a 4. Conforme o exemplo:
Se num = 2 o retorno da função dever ser a string:

"1x2 = 2, 2x2 = 4, 3x2 = 6 e 4x2 = 8"

Dica: Utilize Template Literals para escrever a string que deverá ser retornada pela função. Note que a string deve ter os espaços-em-branco nos lugares indicados*/

function mostraTaboada(num){
  let string ='1x${num} = (${num}*1';
  return string;
};

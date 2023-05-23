//01 - Soma especial
/*
Nesse exercício você criará uma função chamada somaEspecial(num1, num2) que recebe dois números como parâmetros.
O primeiro deve ser multiplicado por 2 e armazenado em uma variável dentro da função.
O segundo deve ser dividido por 2 e também deve ser armazenado em um varíável dentro dessa função.
Essa função deve retornar a soma entre essas duas variáveis, encontradas a partir dos parâmetros recebidos.
*/

function somaEspecial(num1, num2){
  a = num1 *2;
  b = num2 /2;
  return a + b;
};

//02 - Calcule a Raíz
/*
Complete a função chamada retornaRaiz() que deve receber um número como parâmetro e retonar a raiz quadrada do valor recebido.
*/
function retornaRaiz(num) {
    const raiz = Math.sqrt(num);
    return raiz;
};

//03 - Arredondamento
/*
Utilize o método round(x) da biblioteca Math do JavaScript para criar uma função chamada arredonda(x), que recebe como parâmetro um número decimal, 
e retorna o inteiro mais próximo.
*/
function arredonda(x) {
    const rounded = Math.round(x);
    return rounded;
};

//04 - Arredondamento para baixo
/*
Pesquise sobre o método floor(x) da biblioteca Math do JavaScript e crie uma função chamada arredondaParaBaixo(x), 
que recebe como parâmetro um número decimal e retorna o maior inteiro menor ou igual ao número recebido.
*/
function arredondaParaBaixo(x) {
    const rounded = Math.floor(x);
    return rounded;
};

//05 - Arredondamento para cima
/*
Pesquise sobre o método ceil(x) da biblioteca Math do JavaScript e crie uma função chamada arredondaParaCima(x) que recebe como parâmetro um número decimal 
e retorna o menor inteiro maior ou igual ao número recebido.
*/

function arredondaParaCima(x) {
  return Math.ceil(x);
}

//06 - Médias
/*
Crie uma função chamada diferencaEntreMedias(n1, n2) que receba dois números e calcule dois valores diferentes, que chamaremos de media1 e media2. Eles devem ser calculados seguindo as expressões:
media1 = (n1+n2)/2
media2 = n1+n2/2
Faça com que a função retorne a diferença entre essas médias (media2 - media1)
Você sabe dizer porque os valores dessas variáveis são diferentes?
*/
function diferencaEntreMedias(n1, n2){
  media1= (n1+n2)/2;
  media2 = n1+n2/2;
  return media2-media1;
}

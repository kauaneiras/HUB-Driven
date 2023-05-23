//01 - While Print
/*
Vamos trabalhar estruturas de loops do tipo while, por isso as soluções apresentarão apenas esse comando.
Escreva a função printNumbers(), que não recebe parâmetros e imprime os números de 1 a 10. Use 10 impressões no console. 
Lembre-se de usar uma estrutura de loop while. Não esqueça de incrementar a variável de controle no final do while, ou 
alterar o valor da condição do while para false em algum momento, para evitar loops infinitos! Sua função não deve retornar nada, 
mas sim usar o console para imprimir cada número numa linha.

obs: os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log 
para debugar, senão o resultado produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar.
*/

function printNumbers(){
  let i = 1;
  while(i<=10){
    console.log(i);
    i++;
  }
};

//02 - Imprime números do intervalo
/*
Nesse exercício escreva a função printInterval(x, y), que recebe dois números como parâmetros e imprime todos os números no intervalo [x,y]. 
Você pode assumir que x ≤ y. Sua função não deve retornar nada, mas sim usar console.log para imprimir cada número numa linha.

obs: os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log para debugar, 
senão o resultado produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar.
*/
function printInterval(x, y){
	while(x<=y){
    console.log(x);
    x++;
  }
};

//03 - Refatore Utilizando While
/*
Neste exercício vamos refatorar o código da função repeteComandos(), utilizando a estrutura while sem alterar o resultado impresso. 
Mais especificamente, note que a função repeteComandos invoca alternadamente as outras funções soma1 e multiplica2, e faz isso 6 vezes. 
Gostaríamos de usar um while para que, no código da repeteComandos, exista somente 1 linha de código que faz uma invocação a soma1, e somente 1 linha de código que faz uma invocação a multiplica2

Obs. 1: Refatorar é quando alteramos o código e mantemos o seu comportamento, logo, refatorar usando while é aplicar o loop while de tal forma que o resultado final ainda se mantém o mesmo.

Obs. 2: Da maneira como está, o código inicial já passa no teste. O objetivo é alterá-lo como pedido, de forma que continue passando no teste.

Os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log para debugar, senão o resultado produzido pela sua função não vai 
bater exatamente com o esperado, e o teste não irá passar.
*/

function repeteComandos() {
  let count = 1;
  while(count<7){
    soma1(count)
    multiplica2(count)
    count++;
  }
}

function soma1(num) {
  console.log(num+1);
}

function multiplica2(num){
  console.log(num*2)
};

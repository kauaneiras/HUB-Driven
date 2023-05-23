//01 - Exercício do-while
/*
Nesse exercício você vai usar uma estrutura do tipo do-while para criar a função randomGen(). Essa função deverá imprimir na tela números inteiros aleatórios entre 0 e 100 
e só deve parar após ser gerado o primeiro número maior ou igual a 80 (esse último número deve ser impresso também). Para gerar um número aleatório, utilize o comando 
Math.floor(Math.random() * 100). Sua função não deve retornar nada, mas sim usar console.log para imprimir cada número numa linha.

obs: os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log para debugar, senão o resultado 
produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar. Caso precise saber, "\n" é o caractere que significa quebra de linha (Enter)
*/
function randomGen(){
  let num = 0;
  let frase = "";
  do{
    num = Math.floor(Math.random()*101);
    console.log(num);
  } while(num < 80)
};

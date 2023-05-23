//01 BEM VINDOS
/*Você deve estar se perguntando. Como isso funciona?
Cada vez que você clicar em "Rodar Testes" vamos executar o seu código e capturar a resposta da sua solução, porém erros podem acontecer. Um erro muito comum é: bolinha is not defined
Obs.: Bolinha pode ser qualquer outro nome.
Execute o código sem fazer nenhuma alteração.
Note que o exercício não foi concluído, e tivemos dois erros nos nossos casos de teste. Os dois casos de teste falharam e vamos entender porquê.
No caso de teste 1, temos uma mensagem amigável, e nós fomos capazes de capturar o erro, e apresentar para você que o teste esperava como resposta a string "Aii siii! 🥳", mas recebeu como resposta a string "Não existe 'bolinha' 😒"
No caso de teste 2, temos novamente uma mensagem, mas em seguida temos um erro de execução: bolinha is not defined. Não se assuste, isso foi um erro que nós não conseguimos capturar. Mas tem exatamente o mesmo significado que o erro anterior
Em ambos os casos o problema está relacionado ao teste estar procurando no seu seu código algo com o nome bolinha, pode ser uma função, uma variável, uma lista, ou qualquer outra coisa, mas não está conseguindo encontrar.
Nesse caso, para concluir o exercício, precisamos alterar a palavra "quadrado" para bolinha e os testes devem ser capazes de indentificar aquilo que estão procurando.*/

function bolinha () {};

//Testes, testes e mais testes
/*No exercício anterior mostramos como ler mensagens de erros, existem outras e se necessário você pode enviar um Feedback caso a mensagem de erro encontrada for impossível de compreender, porém vamos falar um pouco mais sobre os Casos de Teste. 🕵️‍♀️
Os Casos de Teste formam um conjunto de valores de entrada e saída. Para cada exercício existem alguns Casos de Teste (Entradas definidas e Saídas esperadas), vamos usar essas duas informações para testar seu código. Se o seu código passar em todos os casos, isto é, para os valores de entrada retornar os valores de saída corretos, o exercício é marcado como concluído, caso contrário ainda são necessárias algumas alterações no seu código para chegar na solução correta (as vezes são detalhes).
Altere o código ao lado para que ele passe em todos os testes. O código deve imprimir o número 42 numa linha, o número 58 em outra linha, e terminar.
Execute o código e veja os Casos de Teste diferentes. Tente identificar o que aconteceu de errado. O que os testes queriam? E o que está acontecendo?
PS: Você pode fazer com que ele passe em apenas um dos testes. Faça com que a função imprima somente o número 42 (com console.log(42)) e execute os testes para ver o que acontece.*/

function passaPraFrente(valor) {
  return valor; //Deveria ser: return valor;
};

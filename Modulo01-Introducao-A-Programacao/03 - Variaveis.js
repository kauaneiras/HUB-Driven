//01 - Constante Pi
/*Crie uma função chamada calculaArea(r) que recebe um parâmetro numérico e retorna a área de um círculo com esse valor de raio.
Crie na sua função uma constante chamada pi que armazene o valor 3.1415 para utilizar na conta.*/

function calculaArea(r){
  const pi = 3.1415;
  area = (r*r)*pi;
  return area;
}

//02 - Conserte o Bug
/*Um de seus colegas veio pedir ajuda no código dele. Quando ele roda o programa ele encontra o seguinte erro no Console:
TypeError: Assignment to constant variable.
Você sabe como ajudar seu amigo, e consertar o código dele?
obs: os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log para debugar, senão o resultado produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar.*/

function incrementaContador() {
	let count = 0;
  
  count++;
  console.log(count);
}

//03 - Função Horária da Velocidade
/*Crie uma função chamada calculaVelocidade(v0, a, t) que recebe três parâmetros, que representam respectivamente a velocidade inicial, 
a aceleração e o instante de tempo do movimento de uma partícula e retorna a velocidade dessa partícula, nesse instante t, a partir da 
fórmula da função horária do movimento:
V = v0 + a*t
Crie uma variável chama velocidade que receba o valor da expressão acima, e retorne essa variável.*/

function calculaVelocidade(v0, a, t){
  let V = v0+(a*t);
  return V;
}

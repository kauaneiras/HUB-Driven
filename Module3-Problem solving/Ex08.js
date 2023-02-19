
/*

Kleberson e Marta estão enfrentando um grande dilema, os dois são sócios numa maravilhosa lanchonete 
e não conseguem chegar à conclusão de qual é o melhor salgados de todos os tempos, no turno da manhã. 
Após dias de discussão e várias enquetes entre seus clientes, Marta pediu sua ajuda para resolver essa 
história de uma vez por todas.

Marta irá fornecer as notinhas da máquina do caixa de um dia, essa nota agrupa a quantidade de cada 
salgado vendido no espaço de uma hora em cada turno.

Entrada:

A entrada será uma lista de textos onde o início de cada turno é representado pelas letras M (manhã), 
T (tarde), N (noite) que virão sempre nessa ordem. Após a letra do turno existem X valores inteiros 
(X maior ou igual a zero), o primeiro valor é o total de salgados vendidos naquele turno, depois textos 
que representam a quantidade de cada salgado vendido por hora. O texto da quantidade total de salgados é 
representado por um valor numérico, seguido por um espaço, da letra de cada salgado, sendo elas: C (coxinha), 
R (risolis) e P (pastel).

Saída:

A saída deve ser uma lista com a quantidade total de cada salgado, vendido no turno da manhã, na ordem: Coxinha, 
Risolis e Pastel. Pode ser que algum/alguns salgados não tenham sido vendidos de manhã.

Ex 1:
Entrada: arr = ['M', '50', '10 C', '6 R', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']
Saída: [30, 6, 14]. Porque, de manhã, foram vendidos 10+20=30 coxinhas, 6 risolis e 14 pastéis

Ex 2:
Entrada: arr = ['M', '44', '10 C', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']
Saída: [30, 0, 14].

Ex 3:
Entrada: arr = ['M', 'T', '20', '20 C', 'N', '20', '20 P']
Saída: [0, 0, 0].

*/


function contaSalgado (arr) {
    let indM = arr.indexOf('M');
    let indT = arr.indexOf('T');
    let arrM = arr.slice(indM+1, indT);
    let coxinhas = arrM.filter(i => i.includes('C')).map(i => parseInt(i.replace(" C", ""))).reduce((acc, curr) => acc + curr, 0);
    let risoles = arrM.filter(i => i.includes('R')).map(i => parseInt(i.replace(" R", ""))).reduce((acc, curr) => acc + curr, 0);
    let pasteis = arrM.filter(i => i.includes('P')).map(i => parseInt(i.replace(" P", ""))).reduce((acc, curr) => acc + curr, 0);
    return [coxinhas, risoles, pasteis]
}

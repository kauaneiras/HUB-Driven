/*
A teacher, after finishing the correction of the class tests, wants your help to analyze the students' grades.

He wants to find out what is the most common score among students on their last test. All grades are integers between 0 and 100 (inclusive)

If there is more than one most frequent grade, you must return the highest grade (among the most frequent ones).
*/

// My Solution:
function maisFrequente(lst){
  let cont1 = 0;
  let cont2 = 0;
  let num = 0;
  for(let i = 0; i < lst.length; i++){
   for(let j = i+1; j < lst.length; j++){
     if(lst[i] === lst[j]){
       cont2 += 1;
     }
   }
   if(cont1 < cont2){
     cont1 = cont2;
     num = lst[i];
   }
   if(cont1 === cont2){
     if (lst[i] > num){
       num = lst[i]
     }
   }
   cont2=0;
  }
  return num;
}

//Driven Solution:


// solução esperada: usar 2 loops e variáveis candidatas

function maisFrequente(lst) {
    let notaMaisComum = -Infinity;
    let frequenciaNotaMaisComum = -Infinity;

    // fixa uma nota
    for (let i = 0; i < lst.length; i++) {
      const notaBase = lst[i];
      let frequenciaNotaBase = 0;

      // calcula quantas vezes a nota fixada aparece
      for (let j = 0; j < lst.length; j++) {
        const notaTeste = lst[j];

        if (notaTeste === notaBase) {
          frequenciaNotaBase++;
        }
      }

      // se apareceu mais do que a notaMaisComum, ou é maior que ela, atualizar
      if (
        frequenciaNotaBase > frequenciaNotaMaisComum ||
        (frequenciaNotaBase === frequenciaNotaMaisComum &&
          notaBase > notaMaisComum)
      ) {
        notaMaisComum = notaBase;
        frequenciaNotaMaisComum = frequenciaNotaBase;
      }
    }

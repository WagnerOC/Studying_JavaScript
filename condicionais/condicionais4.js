/* 
    Sistemas de Calculo de Notas de Alunos:
 
*/

/* Matérias: */
var nome = prompt('Digite o nome do aluno');

var materiaMatematica = 'Matemática';
var materiaPortugues =  'Português';
var materiaGeografia =  'Geografia';
var materiaHistoria =   'História';
var materiaBiologia =   'Biologia';
var materiaFisica =     'Física';
var materiaQuimica =    'Quimíca';
var materiaFilosofia =  'Filosofia';
var materiaIngles =     'Inglês';
var materiaEdFisica =   'Ed Física';

var notaNecessariaParaPassar = 240;



/* Matemática*/
var notaMatematica1 = prompt ('Matemática: Digite a Nota do Primeiro Bimestre: ');
var notaMatematica2 = prompt('Matemática: Digite a Nota do Segundo Bimestre: ');
var notaMatematica3 = prompt('Matemática: Digite a Nota do Terceiro Bimestre: ');
var notaMatematica4 = prompt('Matemática: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Matemática */
var somaNotasMatematica = Number(notaMatematica1) + Number(notaMatematica2) + Number(notaMatematica3) + Number(notaMatematica4);


/* Média Anual */
var mediaMatematica = somaNotasMatematica / 4;

/* Notas Matemática Bimestres */
console.log(`
  Matéria: ${materiaMatematica}\n
  1° Bimestre: ${notaMatematica1}\n
  2° Bimestre: ${notaMatematica2}\n
  3° Bimestre: ${notaMatematica3}\n
  4° Bimestre: ${notaMatematica4}\n`);

    if (somaNotasMatematica >= 240){
      console.log(` Parabéns ${nome}!\n Você passou em ${materiaMatematica}!\n A soma de suas Notas de ${materiaMatematica} foram: ${somaNotasMatematica} pontos!\n Você tem uma folga de Notas de ${somaNotasMatematica - notaNecessariaParaPassar} pontos!\n Sua média no ano é de ${mediaMatematica} pontos!`);
    }
    else{
    console.log
    (`${nome}.\nVocê não atingiu a Nota para passar em ${materiaMatematica}.\nA soma de suas Notas de ${materiaMatematica} foram: ${somaNotasMatematica} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasMatematica} pontos para conseguir!\nSua média foi de ${mediaMatematica} pontos no ano.\n`);
    }





/* Português */
var notaPortugues1 = prompt ('Português: Digite a Nota do Primeiro Bimestre: ');
var notaPortugues2 = prompt('Português: Digite a Nota do Segundo Bimestre: ');
var notaPortugues3 = prompt('Português: Digite a Nota do Terceiro Bimestre: ');
var notaPortugues4 = prompt('Português: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Português */
var somaNotasPortugues = Number(notaPortugues1) + Number(notaPortugues2) + Number(notaPortugues3) + Number(notaPortugues4);


/* Média Anual */
var mediaPortugues = somaNotasPortugues / 4;

/* Notas Português Bimestres */
console.log(`
  Matéria: ${materiaPortugues}\n
  1° Bimestre: ${notaPortugues1}\n
  2° Bimestre: ${notaPortugues2}\n
  3° Bimestre: ${notaPortugues3}\n
  4° Bimestre: ${notaPortugues4}\n`);

    if (somaNotasPortugues >= 240){
      console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaPortugues}!\n A soma de suas Notas de ${materiaPortugues} foram: ${somaNotasPortugues} pontos!\n Você tem uma folga de Notas de ${somaNotasPortugues - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaPortugues} pontos!`);
    }
    else{
      (`${nome}.\nVocê não atingiu a Nota para passar em ${materiaPortugues}.\nA soma de suas Notas de ${materiaPortugues} foram: ${somaNotasPortugues} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasMatematica} pontos para conseguir!\nSua média foi de ${mediaPortugues} pontos no ano.\n`);
    }



/* Geografia*/
var notaGeografia1 = prompt ('Geografia: Digite a Nota do Primeiro Bimestre: ');
var notaGeografia2 = prompt('Geografia: Digite a Nota do Segundo Bimestre: ');
var notaGeografia3 = prompt('Geografia: Digite a Nota do Terceiro Bimestre: ');
var notaGeografia4 = prompt('Geografia: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Geografia */
var somaNotasGeografia = Number(notaGeografia1) + Number(notaGeografia2) + Number(notaGeografia3) + Number(notaGeografia4);

/* Média */
var mediaGeografia = somaNotasGeografia / 4;


/* Notas Geografia Bimestres */
  console.log(`
  Matéria: ${materiaGeografia}\n
  1° Bimestre: ${notaGeografia1}\n
  2° Bimestre: ${notaGeografia2}\n
  3° Bimestre: ${notaGeografia3}\n
  4° Bimestre: ${notaGeografia4}\n`);

  if(somaNotasGeografia >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaGeografia}!\n A soma de suas Notas de ${materiaGeografia} foram: ${somaNotasGeografia} pontos!\n Você tem uma folga de Notas de ${somaNotasGeografia - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaGeografia} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaGeografia}.\nA soma de suas Notas de ${materiaGeografia} foram: ${somaNotasGeografia} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasGeografia} pontos para conseguir!\nSua média foi de ${mediaGeografia} pontos no ano.\n`);
  }



/* História */
var notaHistoria1 = prompt ('História: Digite a Nota do Primeiro Bimestre: ');
var notaHistoria2 = prompt('História: Digite a Nota do Segundo Bimestre: ');
var notaHistoria3 = prompt('História: Digite a Nota do Terceiro Bimestre: ');
var notaHistoria4 = prompt('História: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas História */
var somaNotasHistoria = Number(notaHistoria1) + Number(notaHistoria2) + Number(notaHistoria3) + Number(notaHistoria4);

/* Média Anual */
var mediaHistoria = somaNotasHistoria / 4;

/* Notas História Bimestres */
console.log(`
  Matéria: ${materiaHistoria}\n
  1° Bimestre: ${notaHistoria1}\n
  2° Bimestre: ${notaHistoria2}\n
  3° Bimestre: ${notaHistoria3}\n
  4° Bimestre: ${notaHistoria4}\n`)

  if(somaNotasHistoria >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaHistoria}!\n A soma de suas Notas de ${materiaHistoria} foram: ${somaNotasHistoria} pontos!\n Você tem uma folga de Notas de ${somaNotasHistoria - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaHistoria} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaHistoria}.\nA soma de suas Notas de ${materiaHistoria} foram: ${somaNotasHistoria} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasHistoria} pontos para conseguir!\nSua média foi de ${mediaHistoria} pontos no ano.\n`);
  }



/* Biologia */

var notaBiologia1 = prompt ('Biologia: Digite a Nota do Primeiro Bimestre: ');
var notaBiologia2 = prompt('Biologia: Digite a Nota do Segundo Bimestre: ');
var notaBiologia3 = prompt('Biologia: Digite a Nota do Terceiro Bimestre: ');
var notaBiologia4 = prompt('Biologia: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Biologia */
var somaNotasBiologia = Number(notaBiologia1) + Number(notaBiologia2) + Number(notaBiologia3) + Number(notaBiologia4);

/* Média Anual*/
var mediaBiologia = somaNotasBiologia / 4;

/* Notas Biologia Bimestres */
console.log(`
  Matéria: ${materiaHistoria}\n
  1° Bimestre: ${notaHistoria1}\n
  2° Bimestre: ${notaHistoria2}\n
  3° Bimestre: ${notaHistoria3}\n
  4° Bimestre: ${notaHistoria4}\n`)

  if(somaNotasBiologia >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaBiologia}!\n A soma de suas Notas de ${materiaBiologia} foram: ${somaNotasBiologia} pontos!\n Você tem uma folga de Notas de ${somaNotasBiologia - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaBiologia} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaBiologia}.\nA soma de suas Notas de ${materiaBiologia} foram: ${somaNotasBiologia} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasBiologia} pontos para conseguir!\nSua média foi de ${mediaBiologia} pontos no ano.\n`);
  }


/* Física*/

var notaFisica1 = prompt ('Física: Digite a Nota do Primeiro Bimestre: ');
var notaFisica2 = prompt('Física: Digite a Nota do Segundo Bimestre: ');
var notaFisica3 = prompt('Física: Digite a Nota do Terceiro Bimestre: ');
var notaFisica4 = prompt('Física: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Física */
var somaNotasFisica = Number(notaFisica1) + Number(notaFisica2) + Number(notaFisica3) + Number(notaFisica4);

/* Média Anual*/
var mediaFisica = somaNotasFisica / 4;

console.log(`
  Matéria: ${materiaFisica}\n
  1° Bimestre: ${notaFisica1}\n
  2° Bimestre: ${notaFisica2}\n
  3° Bimestre: ${notaFisica3}\n
  4° Bimestre: ${notaFisica4}\n`);

  if(somaNotasFisica >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaFisica}!\n A soma de suas Notas de ${materiaFisica} foram: ${somaNotasFisica} pontos!\n Você tem uma folga de Notas de ${somaNotasFisica - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaFisica} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaFisica}.\nA soma de suas Notas de ${materiaFisica} foram: ${somaNotasFisica} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasFisica} pontos para conseguir!\nSua média foi de ${mediaFisica} pontos no ano.\n`);
  }




/* Quimíca */

var notaQuimica1 = prompt ('Química: Digite a Nota do Primeiro Bimestre: ');
var notaQuimica2 = prompt('Química: Digite a Nota do Segundo Bimestre: ');
var notaQuimica3 = prompt('Química: Digite a Nota do Terceiro Bimestre: ');
var notaQuimica4 = prompt('Química: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Química */
var somaNotasQuimica = Number(notaQuimica1) + Number(notaQuimica2) + Number(notaQuimica3) + Number(notaQuimica4);

/* Média Anual*/
var mediaQuimica = somaNotasQuimica / 4;

  /* Notas Quimica  Bimestres */
  console.log(`
  Matéria: ${materiaQuimica}\n
  1° Bimestre: ${notaQuimica1}\n
  2° Bimestre: ${notaQuimica2}\n
  3° Bimestre: ${notaQuimica3}\n
  4° Bimestre: ${notaQuimica4}\n`);

  if(somaNotasQuimica >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaQuimica}!\n A soma de suas Notas de ${materiaQuimica} foram: ${somaNotasQuimica} pontos!\n Você tem uma folga de Notas de ${somaNotasQuimica - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaQuimica} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaQuimica}.\nA soma de suas Notas de ${materiaQuimica} foram: ${somaNotasQuimica} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasQuimica} pontos para conseguir!\nSua média foi de ${mediaQuimica} pontos no ano.\n`);
  }





/* Filosofia */

var notaFilosofia1 = prompt ('Filosofia: Digite a Nota do Primeiro Bimestre: ');
var notaFilosofia2 = prompt('Filosofia: Digite a Nota do Segundo Bimestre: ');
var notaFilosofia3 = prompt('Filosofia: Digite a Nota do Terceiro Bimestre: ');
var notaFilosofia4 = prompt('Filosofia: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Filosofia */
var somaNotasFilosofia = Number(notaFilosofia1) + Number(notaFilosofia2) + Number(notaFilosofia3) + Number(notaFilosofia4);

/* Média Anual*/
var mediaFilosofia = somaNotasFilosofia / 4;

/* Notas Filosofia Bimestres */
console.log(`
  Matéria: ${materiaFilosofia}\n
  1° Bimestre: ${notaFilosofia1}\n
  2° Bimestre: ${notaFilosofia2}\n
  3° Bimestre: ${notaFilosofia3}\n
  4° Bimestre: ${notaFilosofia4}\n`)

  if(somaNotasFilosofia >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaFilosofia}!\n A soma de suas Notas de ${materiaFilosofia} foram: ${somaNotasFilosofia} pontos!\n Você tem uma folga de Notas de ${somaNotasFilosofia - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaFilosofia} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaFilosofia}.\nA soma de suas Notas de ${materiaFilosofia} foram: ${somaNotasFilosofia} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasFilosofia} pontos para conseguir!\nSua média foi de ${mediaFilosofia} pontos no ano.\n`);
  }




/* Inglês */

var notaIngles1 = prompt ('Inglês: Digite a Nota do Primeiro Bimestre: ');
var notaIngles2 = prompt('Inglês: Digite a Nota do Segundo Bimestre: ');
var notaIngles3 = prompt('Inglês: Digite a Nota do Terceiro Bimestre: ');
var notaIngles4 = prompt('Inglês: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Inglês */
var somaNotasIngles = Number(notaIngles1) + Number(notaIngles2) + Number(notaIngles3) + Number(notaIngles4);

/* Média Anual*/
var mediaIngles = somaNotasIngles / 4;

/* Notas Ingles Bimestres */
console.log(`
  Matéria: ${materiaIngles}\n
  1° Bimestre: ${notaIngles1}\n
  2° Bimestre: ${notaIngles2}\n
  3° Bimestre: ${notaIngles3}\n
  4° Bimestre: ${notaIngles4}\n`);

  if(somaNotasIngles >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaIngles}!\n A soma de suas Notas de ${materiaIngles} foram: ${somaNotasIngles} pontos!\n Você tem uma folga de Notas de ${somaNotasIngles - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaIngles} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaIngles}.\nA soma de suas Notas de ${materiaIngles} foram: ${somaNotasIngles} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasIngles} pontos para conseguir!\nSua média foi de ${mediaIngles} pontos no ano.\n`);
  }


/* Ed.Física */

var notaEdFisica1 = prompt ('Ed. Física: Digite a Nota do Primeiro Bimestre: ');
var notaEdFisica2 = prompt('Ed. Física: Digite a Nota do Segundo Bimestre: ');
var notaEdFisica3 = prompt('Ed. Física: Digite a Nota do Terceiro Bimestre: ');
var notaEdFisica4 = prompt('Ed. Física: Digite a Nota do Quarto Bimestre: ');

/* Soma das Notas Ed Física */
var somaNotasEdFisica = Number(notaEdFisica1) + Number(notaEdFisica2) + Number(notaEdFisica3) + Number(notaEdFisica4);

/* Média Anual*/
var mediaEdFisica = somaNotasEdFisica / 4;

/* Notas Ed Física Bimestres */
console.log(`
  Matéria: ${materiaEdFisica}\n
  1° Bimestre: ${notaEdFisica1}\n
  2° Bimestre: ${notaEdFisica2}\n
  3° Bimestre: ${notaEdFisica3}\n
  4° Bimestre: ${notaEdFisica4}\n`)

  if(somaNotasEdFisica >= 240){
    console.log(`\n Parabéns ${nome}!\n Você passou em ${materiaEdFisica}!\n A soma de suas Notas de ${materiaEdFisica} foram: ${somaNotasEdFisica} pontos!\n Você tem uma folga de Notas de ${somaNotasEdFisica - notaNecessariaParaPassar} pontos! \n Sua média no ano é de ${mediaEdFisica} pontos!`);
  }
  else{
    console.log(`${nome}.\nVocê não atingiu a Nota para passar em ${materiaEdFisica}.\nA soma de suas Notas de ${materiaEdFisica} foram: ${somaNotasEdFisica} pontos\nFaltaram ${notaNecessariaParaPassar - somaNotasEdFisica} pontos para conseguir!\nSua média foi de ${mediaEdFisica} pontos no ano.\n`);
  }




/* Vendo se o Aluno passou de série calculando a média de todas as matérias*/


  somaMedia = mediaMatematica + mediaPortugues + mediaGeografia + mediaHistoria + mediaBiologia + mediaFisica + mediaQuimica + mediaFilosofia + mediaIngles + mediaEdFisica

  if(somaMedia >= 600){
    console.log(`\nParabéns ${nome}!!\nVocê foi APROVADO(A)!!! E está na próxima Série!`)
  }
  else{
    console.log(`${nome}. Infelizmente você foi Reprovado(a).\nVocê terá que repetir a série`)
  }

  
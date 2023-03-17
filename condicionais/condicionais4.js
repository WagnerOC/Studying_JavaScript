/* 
    Cal =culando média das notas do Aluno
    São 10 notas 
/*/

var nome = 'Ana'

var materiaMatematica = 'Matemática'
var materiaPortugues = 'Português'
var materiaGeografia = 'Geografia'
var materiaHistoria =  'História'
var materiaBiologia =  'Biologia'
var materiaFisica =    'Física'
var materiaQuimica =   'Quimíca'
var materiaFilosofia = 'Filosofia'
var materiaIngles =    'Inglês'
var materiaEdFisica =  'Ed Física'



/* Matemática*/
var notaMatematica1 = 100;
var notaMatematica2 = 90;
var notaMatematica3 = 95;
var notaMatematica4 = 100;

/* Média */
var mediaMatematica = notaMatematica1 + notaMatematica2 + notaMatematica3 + notaMatematica4 / 4;




/* Português */

var notaPortugues1 = 80 ;
var notaPortugues2 = 95 ;
var notaPortugues3 = 80 ;
var notaPortugues4 = 100 ;

/* Média */
var mediaPortugues = notaPortugues1 + notaPortugues2 +  notaPortugues3 + notaPortugues4 / 4;




/* Geografia*/
var notaGeografia1 = 100;
var notaGeografia2 = 90;
var notaGeografia3 = 95;
var notaGeografia4 = 100;

/* Média */
var mediaGeografia1 = notaGeografia2 + notaGeografia2 + notaGeografia3 + notaGeografia4 / 4;




/* História */

var notaHistoria1 = 80 ;
var notaHistoria2 = 95 ;
var notaHistoria3 = 80 ;
var notaHistoria4 = 100 ;

/* Média */
var mediaHistoria = notaHistoria1 + notaHistoria2 +  notaHistoria3 + notaHistoria4 / 4;



/* Biologia */

var notaBiologia1 = 80 ;
var notaBiologia2 = 95 ;
var notaBiologia3 = 80 ;
var notaBiologia4 = 100 ;

/* Média */
var mediaBiologia = notaBiologia1 + notaBiologia2 +  notaBiologia3 + notaBiologia4 / 4;



/* Física*/

var notaFisica1 = 80 ;
var notaFisica2 = 95 ;
var notaFisica3 = 80 ;
var notaFisica4 = 100 ;

/* Média */
var mediaFisica = notaFisica1 + notaFisica2 +  notaFisica3 + notaFisica4 / 4;



/* Quimíca */

var notaQuimica1 = 80 ;
var notaQuimica2 = 95 ;
var notaQuimica3 = 80 ;
var notaQuimica4 = 100 ;

/* Média */
var mediaQuimica = notaQuimica1 + notaQuimica2 +  notaQuimica3 + notaQuimica4 / 4;



/* Filosofia */

var notaFilosofia1 = 80 ;
var notaFilosofia2 = 95 ;
var notaFilosofia3 = 80 ;
var notaFilosofia4 = 100 ;

/* Média */
var mediaPortugues = notaPortugues1 + notaPortugues2 +  notaPortugues3 + notaPortugues4 / 4;



/* Inglês */

var notaIngles1 = 80 ;
var notaIngles2 = 95 ;
var notaIngles3 = 80 ;
var notaIngles4 = 100 ;

/* Média */
var mediaIngles = notaIngles1 + notaIngles2 +  notaIngles3 + notaIngles4/ 4;



/* Ed.Física */

var notaEdFisica1 = 80 ;
var notaEdFisica2 = 95 ;
var notaEdFisica3 = 80 ;
var notaEdFisica4 = 100 ;

/* Média */
var mediaEdFisica = notaEdFisica1 + notaEdFisica2+  notaEdFisica3+ notaEdFisica4 / 4;



/* Notas Matemática Bimestres */
console.log(`
  Matéria: ${materiaMatematica}\n
  1° Bimestre: ${notaMatematica1}\n
  2° Bimestre: ${notaMatematica2}\n
  3° Bimestre: ${notaMatematica3}\n
  4° Bimestre: ${notaMatematica4}\n`)


/* Notas Português Bimestres */
console.log(`
  Matéria: ${materiaPortugues}\n
  1° Bimestre: ${notaPortugues1}\n
  2° Bimestre: ${notaPortugues2}\n
  3° Bimestre: ${notaPortugues3}\n
  4° Bimestre: ${notaPortugues4}\n`)



/* Medias de Matemática */

  if (mediaMatematica > 60){
    console.log(`Parabéns ${nome}!\nVocê Passou em ${materiaMatematica}!\nSua média em ${materiaMatematica} é de: ${mediaMatematica} pontos!`)
  }
  else{
    console.log(`${nome}, infelizmente você não atingiu a média em ${materiaMatematica}.\nSua média foi de ${mediaMatematica}pontos.`)
  }
  


/* Médias de Português */

if (mediaPortugues > 60){
  console.log(`\nParabéns ${nome}!\nVocê Passou em ${materiaPortugues}!\nSua média em ${materiaPortugues} é de: ${mediaPortugues} pontos!`)
}
else{
  console.log(`${nome}, infelizmente você não atingiu a média em ${materiaPortugues}.\n
  Sua média foi de ${mediaPortugues}pontos.`)
}







/* Vendo se o Aluno passou de série calculando a média de todas as matérias*/

if (mediaMatematica > 60 && mediaPortugues > 60)
  console.log(`\nParabéns ${nome}!\nVocê passou em todas as matérias!\n`)
  else{
    console.log(`${nome}, infelizmente você não passou de série.\nSe esforce no seu próximo ano.`)
  }

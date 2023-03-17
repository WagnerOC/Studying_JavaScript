/* Aperte f8 para atualizar no Node.js*/

var selecao = 'Brasil'

if (selecao == 'Brasil'){
  console.log(`${selecao} já ganhou 5 Copas do Mundo!`)
}
  else if(selecao == 'Argentina' || 'Uruguai'){
          console.log(`${selecao} já ganhou 2 Copas do Mundo!`)
  }
    else if(selecao == 'Inglaterra' || 'França' || 'Espanha' || 'Itália' || 'Alemanha'){
          console.log(`${selecao} já ganhou a Copa do Mundo!`)
    }
      else{
        console.log(`${selecao} nunca ganhou uma Copa do Mundo! :( `)
      }
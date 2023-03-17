/* Aperte f8 para atualizar no Node.js*/

var selecao = prompt('Digite algum país que tenha ganhado a Copa do Mundo:')

    console.log(selecao)

      if(selecao == 'Brasil' ||selecao == 'Argentina' || selecao == 'Uruguai'){
      console.log(`${selecao} já ganhou a copa na America do Sul`)
      alert(`A ${selecao} Já ganhou uma Copa dos países da America do Sul`)
      } 
      else if (  selecao == 'Inglaterra' || selecao == 'Itália'
              || selecao == 'Alemanha'   || selecao == 'França'
              || selecao == 'Espanha')

        {
          console.log(`${selecao} já ganhou a Copa`)
          alert(`A ${selecao} Já ganhou a Copa dos países da Europa`)
        }

        else{
          console.log(`${selecao} nunca ganhou a copa`)
          alert(`A ${selecao} Nunca ganhou uma Copa`)
        }

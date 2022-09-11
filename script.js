import { Modal } from './modal.js' //importando dados do arquivo modal.js com o named (tem que colocar no nome do dado o mesmo nome do dado no arquivo modal.js)
import { AlertError } from './alert-error.js' //importando o object literal que tem as propriedades para abrir e fechar o alert error
import { IMC, notANumber } from './utils.js' //importando as funções notANumber e IMC

//variáveis - variables
const form = document.querySelector('form') //pesquisando com o seletor css pela tag form e colocando numa variável JS
const inputWeight = document.querySelector('#weight') //pegando o input com id weight e colocando na variável
const inputHeight = document.querySelector('#height') //pegando o input com id height e colocando na variável

// 3 maneiras de criar e atribuir função a um evento
/*form.onsubmit = () => {}
form.onsubmit = handleSubmit
function handleSubmit() {}*/
form.onsubmit = function(event) { /*quando o formulário for submetido essa função será executada, pois o onsubmit fica atendo a esse evento(submit) - o parâmetro event tem todos os dados do evento submit*/
  event.preventDefault() //o padrão de um evento submit é enviar o formulário e recarregar a página - preventDefault é para evitar o padrão
  //console.log(event) //para ver os dados do evento
  const weight = inputWeight.value //dentro do inputWeight (que referencia o input com id weight) podemos acessar o value (que é o valor digitado no input) e atribuir ele a uma variável
  const height = inputHeight.value 
  const showAlertError = notANumber(weight) || notANumber(height) //se um dos dois forem verdadeiros (se não for número(NaN) ou se for vazio(value == "")), o valor atribuído a variável será true
  if(showAlertError) {
    AlertError.open() //usando o AlertError que foi importando para abrir a caixa de erro
    return; //os códigos abaixo de return não são executados
  } 
  AlertError.close()  //quando os números forem inseridos corretamente, o alert error será fechado
  const result = IMC(weight, height) //executando a função e passando como argumentos os valores digitados no input que estão nas variáveis
  const message = `Seu IMC é de ${result}` 
  Modal.message.innerText = message //alterando o texto do modal - colocando a mensagem com o IMC calculado na função
  Modal.open() //adicionando a classe open na classe modal-wrapper - isso vai fazer com que o modal fique visível
}
//esses comandos tem que ser colocados fora da função acima
inputWeight.oninput = () => AlertError.close() //quando for digitado algo no input, o alert error será fechado
inputHeight.oninput = () => AlertError.close()

Modal.buttonClose.onclick = function() { //ao clicar no 'x' a função será executada
  Modal.close() //removendo a classe open da classe modal-wrapper - isso vai fazer com que o modal fique invisível ao 'x' ser clicado
}

window.addEventListener('keydown', function(event) {  //addEventListener pode ser usado várias vezes com um mesmo evento - esse caso está atendo ao pressionar das teclas
  if(event.key === "Escape") { //se a tecla pressionada for 'esc', então será executado os códigos dentro das chaves
    Modal.close()
  }
})
//forma alternativa de captar o evento e executar uma função quando o evento ocorrer - não é bom usar essa alternativa porque só poderia usar o onkeydown uma única vez
/*window.onkeydown = handleKeydown
function handleKeydown(event) {...}*/





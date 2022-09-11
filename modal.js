export const Modal = { //object literal - objeto com funções para fechar e abrir o modal - está sendo exportado pelo named export
  wrapper: document.querySelector(".modal-wrapper"), //pegando o modal - para fazer o modal aparecer e desaparecer
  message: document.querySelector(".modal .title span"), //pegando o texto dentro do modal - para alterar o texto de acordo com o resultado do IMC
  buttonClose: document.querySelector(".modal .close"), //pegando o 'x' do modal - para o modal sumir ao apertar no x
  
  open() {
    Modal.wrapper.classList.add('open')
  },
  close: function() { //forma alternativa de escrever
    Modal.wrapper.classList.remove('open')
  }
}


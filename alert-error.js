export const AlertError = {
  element: document.querySelector('.alert-error'), //pegando a classe do alert error e colocando na variável element
  open: function () { //criando uma propriedade que o valor dela é uma função que adiciona uma classe open no alert-error
    AlertError.element.classList.add('open')
  },
  close: function () {
    AlertError.element.classList.remove('open')
  }
}
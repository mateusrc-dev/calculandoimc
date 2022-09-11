export function IMC(weight, height) { //função que vai calcular o IMC
  return (weight/ ((height/100) ** 2)).toFixed(2);
}

export function notANumber(value) {
  return isNaN(value) || value == "" //isNaN é uma função que retorna um valor boolean - se caso não for número retornará true, se for, retornará false - verificar também se o value está vazio
}

// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, index1, index2) {
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length &&
    index1 !== index2
  ) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  } else {
    return 'Las posiciones son la misma o no exiten en el array, cambia las posicones de entrada'
  }
}

console.log(swap(fantasticFour, 1, 3))
console.log(swap(fantasticFour, 1, 1))

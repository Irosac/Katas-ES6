// Ejercicio 3 - Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsListtt = [32, 54, 21, 64, 75, 43]

const lista = [...pointsListtt]

console.log(lista)
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

const toyObjetos = { ...toy }
console.log(toyObjetos)

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]

const juntarList = [...pointsList, ...pointsLis2]
console.log(juntarList)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators. (toy de arriba)
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const caractJuguetes = { ...toyObjetos, ...toyUpdate }
console.log(caractJuguetes)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const copyColors1 = [...colors]
copyColors1.splice(2, 1)

console.log(copyColors1)

// Otra manera de hacerlo

const copyColors = [...colors.slice(0, 2), ...colors.slice(3)]

console.log(copyColors)

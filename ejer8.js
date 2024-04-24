// Ejercicio 8 - Bonus

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

const RPGgames = videogames.filter((game) => game.genders.includes('RPG'))

console.log(RPGgames)

const ScoresRPG = RPGgames.reduce((total, game) => total + game.score, 0)

const mediaRPG = ScoresRPG / RPGgames.length
console.log('Mi media para RPG es:', mediaRPG)

// Otra manera de hacerlo
const rpgVideogames = videogames.filter((game) => game.genders.includes('RPG'))

const totalScore = rpgVideogames.reduce((total, game) => total + game.score, 0)

// Calculamos la media de los scores
const averageScore = totalScore / rpgVideogames.length

console.log('La media de los videojuegos de RPG es:', averageScore)

// Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

function filtrarStreamers(event) {
  const inputValue = event.target.value
  const streamersFiltrados = streamers.filter((streamer) =>
    streamer.name.includes(inputValue)
  )
  console.log(streamersFiltrados)
}

// Obtén el elemento del input de tu página web
const inputElement = document.querySelector(
  '[data-function="toFilterStreamers"]'
)

// Agrega un evento de escucha para el evento `input` en el input
inputElement.addEventListener('input', filtrarStreamers)

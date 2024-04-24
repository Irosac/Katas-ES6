// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros

const suma = (a = 10, b = 5) => {
  console.log(a + b)
}

// 1.1 Ejecuta esta función sin pasar ningún parámetro.
console.log('Ejecutando la función sin pasar ningún parámetro:')
suma() // Esto mostrará 15 (10 + 5).

// 1.2 Ejecuta esta función pasando un solo parámetro.
console.log('Ejecutando la función pasando un solo parámetro:')
suma(20) // Esto mostrará 25 (20 + 5).

// 1.3 Ejecuta esta función pasando dos parámetros.
console.log('Ejecutando la función pasando dos parámetros:')
suma(3, 7) // Esto mostrará 10 (3 + 7).

console.log('destructuring')
const person = {
  name: 'martin',
  age: 58,
  location: {
    city: 'Cedar Rapids',
    temp: 42
  }
}

const { name, age } = person
const { city, temp = 'unknown' } = person.location

console.log(`${name} is ${age}, lives in ${city} and its ${temp} degrees there`)

const address = ['168 16th Ave SW', 'Cedar Rapids', 'IA', '52404']

const [, town, state] = address

console.log(`you are in ${town} ${state}`)

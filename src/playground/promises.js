const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data')
    reject('error: something went wrong')
  }, 1500)
})

console.log('before')

promise
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

console.log('after')

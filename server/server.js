const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

console.log('setting up public path')
app.use(express.static(publicPath))

console.log('setting up default path')
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

console.log('telling app to listen on port')
app.listen(port, () => {
  console.log('Server is up!')
})

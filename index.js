var express = require('express')
var app = express()
const path = require('path')
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/index.html')
})

app.listen(3000, () => console.log('listening on 3000'))

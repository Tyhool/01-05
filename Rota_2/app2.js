const express = require('express')
const app = express()

var userRoute = require('./userRoute');
app.use('/', userRoute);

const port = 3000

  
app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost:${port}/user`)
});
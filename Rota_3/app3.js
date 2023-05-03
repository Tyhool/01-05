const express = require('express');
const app = express();


app.use(express.static(__dirname+'/'));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/MDC.html");
});

app.listen(3000,function(erro){
    
  if(erro){
      console.log("erro ao iniciar.");
  }else{
      console.log('Servidor iniciado');
  }
})
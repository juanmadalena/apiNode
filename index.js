const app = require('./app')

app.listen(app.get('port'),()=>{
  console.log('El servidor esta conectado al puerto:'+app.get('port') );
})
const app = require('./app')

const main = ()=>{
    app.listen(app.get("port"))
    console.log("Server is runnig");
}
main()
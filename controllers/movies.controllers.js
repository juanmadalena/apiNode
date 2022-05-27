const connection = require("../database/db")

const getDispositivos = (req, res)=>{
    let query = "SELECT * FROM dispositivos"
    connection.query(query,(err ,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

const getDispositivo = (req, res)=>{
    try{
        let query = `SELECT * FROM dispositivos WHERE id='${req.params.id}'`
        connection.query(query,(err,result)=>{
            if (!err){
                console.log(req.params.id);
                res.json(result)
            }
        })
    }
    catch (err){
        res.sendStatus(500)
    }
}

module.exports = {
    getDispositivo,getDispositivos
}
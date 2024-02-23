
import express from 'express'

const app = express()
const PORT = 4000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send({hola: "mundo"})
})

app.listen(PORT, ()=> {
    console.log(`servidor levantado en puerto ${PORT}`)
})
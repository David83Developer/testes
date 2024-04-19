const express = require('express')
const app = express()

const cors = require('cors')


app.use(express.json())
app.use(cors())

const router = express.Router()

router.get('/testes', (_,res)=> {
    res.json({
        message: "Hello World!"
    })
})

app.use('/', router)

app.listen(8080, ()=> {
    console.log("conectado")
})
const express = require('express')
const app = express()

const cors = require('cors')

const db = require('./models')


app.use(express.json())
app.use(cors())


const userRouter = require('./routes/User.js')
app.use('/users', userRouter)

db.sequelize.sync()
.then(()=> {
    console.log("Conectado ao banco de dados")
})

app.listen(8080, ()=> {
    console.log("conectado")
})
const express = require ('express')
const myRouter = require('./router')

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log ('listening to port 3000')
})

app.use(myRouter)


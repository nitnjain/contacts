const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
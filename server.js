const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    // the following line sends something incredible in response
    res.send(`<h1>Hello World!</h1>
    <p>Server is running in port ${PORT}</p>`)
    
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;

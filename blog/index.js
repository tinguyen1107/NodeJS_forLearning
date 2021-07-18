const express = require('express')
const app = express()
const port = 7000
///route
app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(port, () => {
    console.log('listening at http://localhost:${port}')
})
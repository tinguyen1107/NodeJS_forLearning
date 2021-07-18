const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const { dirname } = require('path')
const path = require('path')

const app = express()
const port = 7000

app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

///route
app.get('/', (req, res) => {
    // return res.send('Hello World!')
    res.render('home')
})

app.get('/news', (req, res) => {
    // return res.send('Hello World!')
    res.render('news')
})

app.listen(port, () => {
    console.log('listening at http://localhost:${port}')
})
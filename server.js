const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

const currentYear = new Date().getFullYear()

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear
  })
})

app.get('/bad', (req, res) => {
  res.send({ errorMessage: 'Error handling request' })
})

app.listen(3000, () => console.log('Server is up on port 3000'))

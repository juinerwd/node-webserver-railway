const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Juiner Solis',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

app.get('/elements', (req, res) => {
  res.render('elements')
})


// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html')
// })

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})
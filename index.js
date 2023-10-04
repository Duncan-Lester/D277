const express = require('express')
const app = express()
const port = 3000
app.use(express.static('resources'))
app.set('view engine', 'ejs')

app.get('/state', (req,res) => {
    res.render('state')
})
app.get('/city1', (req,res) => {
    res.render('city1')
})
app.get('/city2', (req,res) => {
    res.render('city2')
})
app.get('city3', (req,res) => {
    res.render('city3')
})

app.listen(port, function (req,res) {
    console.log('listening on port', port);
})
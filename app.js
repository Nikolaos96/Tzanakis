const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
//---------------------------------
// einai ta monopatia gia tous katalogous
const publicDirectoryPath = path.join(__dirname, 'public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs')
// edw allazei to default monopati gia ta views ( gia ta arxeia me kataliksi .hbs)
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))


//-------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.render('index')
})
//--------------------------------------------------------------------------------
app.get('/rent', (req, res) => {
    res.render('rent')
})

app.post('/email_me', (req, res) => {

    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);

    res.redirect('/')
})

app.get('/apartments', (req, res) => {
    res.render('apartments')
})

app.get('/beaches', (req, res) => {
    res.render('beaches')
})

app.get('/airport', (req, res) => {
    res.render('airport')
})


app.get('/restaurants', (req, res) => {
    res.render('restaurants')
})


app.get('/bars', (req, res) => {
    res.render('bars')
})

app.get('/super_markets', (req, res) => {
    res.render('super_markets')
})

app.get('/banks', (req, res) => {
    res.render('banks')
})


app.get('/hospital', (req, res) => {
    res.render('hospital')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
//--------------------------------------------------------------------------------

app.get('/greek', (req, res) => {
    res.render('index_greek')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
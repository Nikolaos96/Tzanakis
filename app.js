const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/rent', (req, res) => {
    res.render('rent')
})

app.get('/email_me', (req, res) => {
    res.render('email_me')
})

const transporter = nodemailer.createTransport({
    host: 'premium123.web-hosting.com',
    port: 465, // Η προεπιλεγμένη πόρτα για το SMTP SSL είναι η 465
    secure: true, // Χρησιμοποιήστε SSL
    auth: {
      user: 'info@revel-properties.com', // Η διεύθυνση email σας στο cPanel
      pass: 'Tzankon1234@', // Ο κωδικός πρόσβασής σας στο cPanel
    },
});

app.post('/email_me', (req, res) => {

    try{
        const mailOptions = {
            from: 'info@revel-properties.com',
            to: 'info@revel-properties.com',
            subject: 'Sender: ' + req.body.email + " Say: " + req.body.subject,
            text: "From: " + req.body.email + "\n" + "Subject: " + req.body.subject + "\n\n" + req.body.message
        };
    
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
              console.error('Σφάλμα κατά την αποστολή:', err);
              res.redirect('contact');
            } else{
                console.log('Email στάλθηκε');
                res.redirect('contact');
            }
        });
    }catch{
        res.redirect('contact');
    }
})

app.post('/email_me2', (req, res) => {

    try{
        const mailOptions = {
            from: 'info@revel-properties.com',
            to: 'info@revel-properties.com',
            subject: 'Sender: ' + req.body.email + " Say: " + req.body.subject,
            text: "From: " + req.body.email + "\n" + "Subject: " + req.body.subject + "\n\n" + req.body.message
        };
    
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
              console.error('Σφάλμα κατά την αποστολή:', err);
              res.redirect('/');
            } else{
                console.log('Email στάλθηκε');
                res.redirect('/');
            }
        });
    }catch{
        res.redirect('/');
    }
})

app.get('/contact', (req, res) => {
     res.render('contact');
})


//--------------------------------------------------------------------------------


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
 

//------------------------
//    VARs
//-----------------------
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const defaultRoutes = require('../routes/default');   // significa ../routes/default.js
const logRoutes = require('../routes/logging');     
const apiSommaRoutes = require('../routes/apiSomma');     
const errorContoller = require('../controller/error');    
const helmet = require('helmet');
const cors = require('cors');
const corsWhitelist = ['http://localhost']
const corsOptions = { origin: corsWhitelist };

//------------------------
//    MIDDLEWARE
//-----------------------
app.use(helmet());
app.use(new cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logRoutes);       
app.use(defaultRoutes);               // app.use('/blabla', defaultRoutes);
app.use(apiSommaRoutes);              // app.use('/blabla', defaultRoutes);
app.use(errorContoller.get404Page);    
apiSommaRoutes



/*
app.use('*', function (req, res) {
  res
    .status(404)
    .send(`<H2>Page not found</H2>`);
});
*/

//------------------------
//    MAIN
//-----------------------
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

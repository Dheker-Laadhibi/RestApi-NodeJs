const express = require('express');
const app = express();
require('dotenv').config()
/**connect to database  */
 const mongoose = require('mongoose');
const router = require('./router')
var bodyParser = require('body-parser')
/**we added body parser here  to handle POST request data and parse it into a format that you can work with, like JSON or URL-encoded data. */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/*router*/

/** any router should have /api  */
app.use('/api',router)
 mongoose.connect(process.env.MONGO_URL)
 //connection
    .then(()=>console.log(' connection success'))
    .catch(err => console.log(err))
/** run the server    */
// npm test node server.js

const port = process.env.PORT;
app.listen(port ,()=>console.log(`server run  in port ${port}`))
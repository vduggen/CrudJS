const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use( express.json() );

mongoose.connect(
    'mongodb://localhost:27017/companyApi', 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
);
require('./src/models/Company');

app.use('/api', require('./src/routes'));

app.listen( 3333 );
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setting up config file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "https://63d0e44d9c5cc22856370c47--stunning-malabi-7f47f3.netlify.app", credentials: true}));
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);
// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

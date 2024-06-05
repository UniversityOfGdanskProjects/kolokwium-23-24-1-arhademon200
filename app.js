const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('database');
const productRoutes = require('productRoutes');
const orderRoutes = require('orderRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;

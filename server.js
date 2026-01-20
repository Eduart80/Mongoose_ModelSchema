require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT
require('./db/connection')
const productRoutes = require('./routes/bookRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/bookShelf', productRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Mongoose Model Schema API' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

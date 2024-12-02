const express = require('express');
const path = require('path');
const app = express();
const crypto = require('crypto');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', { title: 'Merchant Checkout Page' });
});


app.get('/api/order', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3001/api/order');
    const result = await response.json();

    console.log("Created the Order:",result);
    res.json(result);
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


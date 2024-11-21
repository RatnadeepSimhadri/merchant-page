const express = require('express');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Route for home page
app.get('/', (req, res) => {
  res.render('index', { message: 'Main Host Application' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


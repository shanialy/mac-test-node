// app.js
const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Basic route to respond with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

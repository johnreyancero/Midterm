// Import ang Express library
const express = require('express');

// Create ang Express app
const app = express();

// Set ang port nga 3000
const port = 3000;

// Define ang /test route nga mag-send og JSON response
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! John Rey Ancero' });
});

// Start ang server sa port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
///////////////////////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from root
app.use(express.static(__dirname));

// Explicitly handle root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.json());

app.post("/api", (request, response) => {
  response.json({
    "votestatus": "successful!"
  })
  console.log(request.body);
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log(`listening at ${port}`))
}

module.exports = app;
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(".")); // serve files from root directory
app.use(express.json());

app.post("/api", (request, response) => {
  response.json({
    "votestatus": "successful!"
  })
  console.log(request.body);
});

// for local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log(`listening at ${port}`))
}

module.exports = app;
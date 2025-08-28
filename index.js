const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json()); //can add limits her in props to protect server


app.get("/", (request, response) => {
  response.send(`
    <h1>Cornell Sailing to the Stars</h1>
    <p>Welcome to our website!</p>
    <p>API endpoint available at <a href="/api">/api</a></p>
  `);
});

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
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json()); //can add limits her in props to protect server


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
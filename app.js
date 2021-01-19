const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome Tim! Test");
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

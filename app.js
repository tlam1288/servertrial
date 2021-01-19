const express = require("express");
const setupApiRoutes = require("./routes/apiRoutes");
const setupHtmlRoutes = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

setupApiRoutes(app);
setupHtmlRoutes(app);

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});

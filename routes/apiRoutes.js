const nameData = require("../data/nameData");

module.exports = function (app) {
  app.get("/api/person", (req, res) => {
    res.json(nameData);
  });
};

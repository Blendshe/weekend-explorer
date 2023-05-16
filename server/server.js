const express = require("express");
const cors = require("cors"); // middleware
require("dotenv").config();
const app = express();
app.use(cors());

const PORT = process.env.PORT;

const data = require("./data.json");

app.get("/", function (request, response) {
  response.json(
    "You can use the /outdoor-swim endpoint to retrieve data about locations."
  );
});

app.get("/outdoor-swim", function (request, response) {
  response.json(data);
});

app.listen(PORT, function () {
  console.log("Server is listening on PORT " + PORT);

});

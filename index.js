const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5005;

app.use(cors());

const categories = require("./data/category.json");

app.get("/", (req, res) => {
  res.send(`Data is coming`);
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`News mania server running on port: ${port}`);
});

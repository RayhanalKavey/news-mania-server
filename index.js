const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5005;

app.use(cors());

const categories = require("./data/category.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send(`Data is coming`);
});
// notE category news
app.get("/news-categories", (req, res) => {
  res.send(categories);
});
// notE news
app.get("/news", (req, res) => {
  res.send(news);
});
// notE News find specific news with the id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(req.params.id);
  // console.log(req.params.id);
});
////notE Filter the news which are in same category
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  //Show all news when id is 08
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});
//--------------
app.listen(port, () => {
  console.log(`News mania server running on port: ${port}`);
});

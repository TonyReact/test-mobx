const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/prices", (req, res) => {
  const data = {
    snacks: "2",
    wine: "10",
  };
  res.json(data);
});

app.listen(3031, () => {
  console.log("Сервер запущен на порту 3031");
});

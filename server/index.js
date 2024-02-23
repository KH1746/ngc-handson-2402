const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello Server World!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

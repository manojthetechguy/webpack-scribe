const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/kiwi/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/kiwi.html");
  const contents = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contents);
});

app.use("/", express.static(path.resolve(path.resolve(__dirname, "../dist"))));

const PORT = 9002;

app.listen(PORT, () => {
  console.info(`Server listening at PORT: ${PORT}`);
});

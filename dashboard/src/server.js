const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("*", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const content = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(content);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.info(`Server listening at ${PORT}`);
});

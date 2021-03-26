const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(
  "/static",
  express.static(path.resolve(path.resolve(__dirname, "../dist")))
);

const PORT = 3000;

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contents = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contents);
});

app.listen(PORT, () => {
  console.info(`Server listening at PORT: ${PORT}`);
});

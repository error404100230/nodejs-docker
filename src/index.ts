import express from "express";

const app = express();
const PORT = 8000;

app.get("/", async function (req, res) {
  res.send("Hello from Node js");
});

app.listen(PORT, async function () {
  console.log(`App runnint on ${PORT}`);
});
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", async function (req, res) {
  res.send("Hello from Node js world");
});

app.listen(PORT, async function () {
  console.log(`App runnint on ${PORT}`);
});

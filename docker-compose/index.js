const app = require("express")();


app.use("/", async (req, res) => {
  res.status(200).send("Welcome to docker compose");
});

app.listen(3000, () => {
  console.warn("linstening...");
});


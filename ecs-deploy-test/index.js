const app = require("express")();

app.use((req, res) => {
  console.log(`hit page`);
  res.send("server is running!");
});

app.listen(80, () => {
  console.log(`server is running on port 80`);
});

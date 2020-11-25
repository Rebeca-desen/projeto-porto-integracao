const app = require("./src/app");
const port = 8090;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});

const express = require("express");
const app = express();
const productsRouter = require("./src/routes/productos.js");

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("productForm.pug");
});

app.use("/productos", productsRouter);

app.listen(PORT, () => console.log("Server activo en puerto " + PORT));

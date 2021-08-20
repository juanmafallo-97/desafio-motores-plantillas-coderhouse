const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const productsRouter = require("./src/routes/productos.js");

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("productForm");
});

app.use("/productos", productsRouter);

app.listen(PORT, () => console.log("Server activo en puerto " + PORT));

const express = require("express");
const ProductsApi = require("../../api.js");

const router = express.Router();
const api = new ProductsApi("productos.json");

router.get("/", async (req, res) => {
  try {
    let hayProductos = false;
    const productos = await api.getAll();
    if (productos.length > 0) hayProductos = true;
    res.render("productsList", { productos, hayProductos });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const savedProduct = await api.save(newProduct);
    res.json(savedProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;

const form = document.getElementById("product-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title");
  let price = document.getElementById("price");
  let thumbnail = document.getElementById("thumbnail");

  const productData = {
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  };

  fetch("/productos", options)
    .then((response) => response.json())
    .then((product) => {
      console.log(product);
      alert("Producto agregado exitosamente:" + JSON.stringify(product));
      title.value = "";
      price.value = "";
      thumbnail.value = "";
    });
});

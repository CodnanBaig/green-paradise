import nav from "../components/nav.js";
import footer from "../components/footer.js";
import popularProductsCarousel from "../components/popularProducts.js";

popularProductsCarousel();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

document.addEventListener("DOMContentLoaded", () => {
  let selectedProduct = JSON.parse(localStorage.getItem("selected-product"));
  let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
  let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;

  document.title = "Green Paradise | " + selectedProduct.name;
  let displayProduct = () => {
    let parent = document.getElementById("product");
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `
      <div class="col-lg-4 col-sm-12">
        <img class="img-fluid" src=${selectedProduct.img} alt="" />
      </div>
      <div class="col-lg-8 col-sm-12">
        <h2>${selectedProduct.name}</h2>
        <h4>${selectedProduct.price}RS</h4>
        <p class="mt-3">${selectedProduct.description}</p>
        <button id="addCart" class="btn catalog-btn">Add to cart</button>
      </div>`;

    let addCart = card.querySelector("button");
    addCart.addEventListener("click", () => {
      cartCount++;
      cartList.push(selectedProduct);
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      localStorage.setItem("cart-count", JSON.stringify(cartCount));
      updateCartCountUI();
    });
    parent.append(card);
  };

  function updateCartCountUI() {
    let cCount = document.getElementById("cartCount");
    cCount.innerText = cartCount;
  }

  displayProduct();
});

import footer from "../components/footer.js";
import nav from "../components/nav.js";
import popularProductsCarousel from "../components/popularProducts.js";
popularProductsCarousel();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

let selectedCategory =
  JSON.parse(localStorage.getItem("selected-category")) || [];
let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;
let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
let categoryName = selectedCategory[0].category;
let categoryImg = selectedCategory[0].categoryImage;

let heading = document.querySelector(".heading");
let heroImg = document.getElementById("hero-img");
let allCat = document.getElementById("all-cat");
heroImg.setAttribute("src", categoryImg);
heading.textContent = categoryName;
allCat.textContent = categoryName;

let cont = document.getElementById("list");

selectedCategory.forEach((el) => {
  let card = document.createElement("div");
  card.setAttribute("class", "col-lg-4 col-md-4 col-sm-6");

  card.innerHTML = `<div class="product-card">
    <div class="card">
      <img src="${el.img}" class="card-img-top" alt="Product Image" />
      <div class="card-body d-flex justify-content-between">
        <div class="details">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.price} RS</p>
        </div>
        <button class="btn btn-primary buy-btn addCart">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  </div>`;

  let addCart = card.querySelector(".addCart");
  addCart.addEventListener("click", () => {
    cartCount++;
    cartList.push(el);
    localStorage.setItem("cart-list", JSON.stringify(cartList));
    localStorage.setItem("cart-count", JSON.stringify(cartCount));
    updateCartCountUI();
  });

  cont.append(card);
});

function updateCartCountUI() {
  let cCount = document.getElementById("cartCount");
  cCount.innerText = cartCount;
}

function generatePaginationButtons(totalPages, currentPage) {
  let paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  for (let page = 1; page <= totalPages; page++) {
    let button = document.createElement("li");
    button.classList.add("page-item");
    if (page === currentPage) {
      button.classList.add("active");
    }
    button.innerHTML = `<a class="page-link" href="#list">${page}</a>`;
    paginationElement.appendChild(button);

    button.addEventListener("click", () => {
      loadPage(page);
    });
  }
}

function loadPage(page) {
  let productsPerPage = 6;
  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let currentPageProducts = selectedCategory.slice(startIndex, endIndex);

  cont.innerHTML = "";

  currentPageProducts.forEach((el) => {
    let card = document.createElement("div"); // Move this line here
    card.setAttribute("class", "col-lg-4 col-md-4 col-sm-6 col-xs-6");

    card.innerHTML = `<div class="product-card">
      <div class="card">
        <img src="${el.img}" class="card-img-top" alt="Product Image" />
        <div class="card-body d-flex justify-content-between">
          <div class="details">
            <h5 class="card-title">${el.name}</h5>
            <p class="card-text">${el.price} RS</p>
          </div>
          <button class="btn btn-primary buy-btn addCart">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>`;

    let addCart = card.querySelector(".addCart");
    addCart.addEventListener("click", () => {
      cartCount++;
      cartList.push(el);
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      localStorage.setItem("cart-count", JSON.stringify(cartCount));
      updateCartCountUI();
    });

    cont.appendChild(card);
  });

  let totalPages = Math.ceil(selectedCategory.length / productsPerPage);
  generatePaginationButtons(totalPages, page);
}

// ... Other code ...

// Call loadPage to load the first page initially
loadPage(1);

let currentPage = 1;
let productsPerPage = 9;
let currentSortType = "";
let currentCategory = "";
//! importing
import footer from "../components/footer.js";
import nav from "../components/nav.js";
import popularProductsCarousel from "../components/popularProducts.js";
popularProductsCarousel();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

let BASEURL = "https://erin-smoggy-worm.cyclic.app";

let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;

let getData = async () => {
  try {
    let res = await fetch(`${BASEURL}products`);
    let data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
getData();

let displayData = async (prods, page, sortType) => {
  let parent = document.getElementById("mainitems");
  parent.innerHTML = "";
  let data = await prods;

  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;

  let filteredData = data.filter((item) => {
    if (Array.isArray(currentCategory) && currentCategory.length > 0) {
      return currentCategory.includes(item.category);
    } else if (currentCategory === "") {
      return true;
    } else {
      return item.category === currentCategory;
    }
  });

  let totalPages = Math.ceil(filteredData.length / productsPerPage);

  if (sortType === "asc") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sortType === "desc") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  for (let i = startIndex; i < endIndex && i < filteredData.length; i++) {
    let el = filteredData[i];
    let card = document.createElement("div");
    card.className = "card col-lg-4 col-sm-6 col-xs-6";

    let image = document.createElement("img");
    image.src = el.img;
    image.alt = "Product Image";
    image.className = "card-img-top";

    image.addEventListener("click", () => {
      localStorage.setItem("selected-product", JSON.stringify(el));
      window.location.href = "productDetails.html";
    });

    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex justify-content-between";
    let details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">${el.price} RS</p>
    `;
    let buyButton = document.createElement("button");
    buyButton.className = "btn btn-primary buy-btn addCart";
    buyButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

    buyButton.addEventListener("click", () => {
      cartList.push(el);
      cartCount = cartList.length;
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      localStorage.setItem("cart-count", JSON.stringify(cartCount));
      console.log(cartCount, cartList);
      updateCartCountUI();
    });

    cardBody.appendChild(details);
    cardBody.appendChild(buyButton);

    card.appendChild(image);
    card.appendChild(cardBody);

    parent.appendChild(card);
  }

  updatePaginationButtons(totalPages, currentPage);
};

function updateCartCountUI() {
  let cCount = document.getElementById("cartCount");
  cCount.innerText = cartCount;
}

let sortDropdown = document.getElementById("sortbtn");
sortDropdown.addEventListener("change", () => {
  let selectedSort = sortDropdown.value;
  displayData(getData(), currentPage, selectedSort);
});

let categoryCheckboxes = document.querySelectorAll(".form-check-input");
categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (selectedCategories.length > 0) {
      currentCategory = selectedCategories;
    } else {
      currentCategory = "";
    }

    displayData(getData(), currentPage, currentSortType);
  });
});

function clearCategoryFilter() {
  currentCategory = "";
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  displayData(getData(), currentPage, currentSortType);
}

function updatePaginationButtons(totalPages, currentPage) {
  let paginationElement = document.getElementById("paginationButtons");
  paginationElement.innerHTML = "";

  for (let page = 1; page <= totalPages; page++) {
    let button = document.createElement("li");
    button.classList.add("page-item");
    if (page === currentPage) {
      button.classList.add("active");
    }
    button.innerHTML = `<a class="page-link" href="#">${page}</a>`;
    button.addEventListener("click", () => {
      currentPage = page;
      displayData(getData(), currentPage, currentSortType);
      updatePaginationButtons(totalPages, currentPage);
    });
    paginationElement.appendChild(button);
  }
}

function loadInitialPage() {
  getData().then((data) => {
    let totalPages = Math.ceil(data.length / productsPerPage);
    displayData(data, currentPage, currentSortType);
    updatePaginationButtons(totalPages, currentPage);
  });
}

loadInitialPage();

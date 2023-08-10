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

let BASEURL = "http://localhost:3000/";

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
    if (currentCategory === "") {
      return true;
    } else {
      return item.category === currentCategory;
    }
  });

  if (sortType === "asc") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sortType === "desc") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  for (let i = startIndex; i < endIndex && i < filteredData.length; i++) {
    let el = filteredData[i];
    let card = document.createElement("div");
    card.className = "card col-lg-4 col-sm-6 col-xs-6";
    card.innerHTML = `<img src=${el.img} class="card-img-top" alt="Product Image" />
    <div class="card-body d-flex justify-content-between">
      <div class="details">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">${el.price} RS</p>
      </div>
      <button class="btn btn-primary buy-btn addCart">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>`;
    parent.append(card);
  }
};

let sortDropdown = document.getElementById("sortbtn");
sortDropdown.addEventListener("change", () => {
  let selectedSort = sortDropdown.value;
  displayData(getData(), currentPage, selectedSort);
});

let categoryCheckboxes = document.querySelectorAll(".form-check-input");
categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      currentCategory = checkbox.value;
    } else {
      currentCategory = "";
    }
    loadPage(currentPage);
  });
});

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
      displayData(getData(), currentPage);
      updatePaginationButtons(totalPages, currentPage);
    });
    paginationElement.appendChild(button);
  }
}

function loadInitialPage() {
  getData().then((data) => {
    let totalPages = Math.ceil(data.length / productsPerPage);
    displayData(data, currentPage);
    updatePaginationButtons(totalPages, currentPage);
  });
}

loadInitialPage();
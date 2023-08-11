let BASEURL = "http://localhost:3000/";
let singleProduct = JSON.parse(localStorage.getItem("selected-product"));

let getData = async () => {
  try {
    let res = await fetch(`${BASEURL}products`);
    let data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

let debouncedSearch = debounce(async (query) => {
  console.log("Search query:", query);

  let data = await getData();
  console.log("All data:", data);

  let filteredResults = data.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase() === query.toLowerCase()
  );

  console.log("Filtered results:", filteredResults);
  displaySearchResultsDropdown(filteredResults);
}, 300);

function displaySearchResultsDropdown(results) {
  let dropdown = document.getElementById("searchResultsDropdown");
  dropdown.innerHTML = "";

  if (results.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  let hideButton = document.createElement("button");
  hideButton.textContent = "Hide Results";
  hideButton.className = "hide-results-button btn btn-outline";
  hideButton.addEventListener("click", () => {
    dropdown.style.display = "none";
  });

  dropdown.appendChild(hideButton);

  dropdown.style.display = "block";

  let ul = document.createElement("ul");
  ul.className = "search-results-list";
  ul.style.listStyle = "none";

  results.forEach((product) => {
    let li = document.createElement("li");
    li.className = "search-result-item";

    let img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.className = "search-result-image";

    let name = document.createElement("h3");
    name.textContent = product.name;
    name.className = "search-result-name";

    let category = document.createElement("small");
    category.textContent = product.category;

    let price = document.createElement("p");
    price.textContent = `$${product.price}RS`;
    price.className = "search-result-price";

    li.append(img, name, category, price);

    li.addEventListener("click", () => {
      localStorage.setItem("selected-product", JSON.stringify(product));
      window.location.href = `productDetails.html`;
    });

    ul.appendChild(li);
  });

  dropdown.appendChild(ul);
}

let nav = () => {
  let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;
  let cCount = document.getElementById("cartCount");
  let userData = JSON.parse(localStorage.getItem("userData")); 
  let loggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

  console.log(userData, loggedIn);
  document.addEventListener("updateCartCount", (event) => {
    cartCount = event.detail.cartCount;
    cCount.innerText = cartCount;
  });
  
  let navContent = `<div class="container">
    <a class="navbar-brand" href="index.html">Green paradise</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="allProducts.html">Catalog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#delivery" tabindex="-1" aria-disabled="true">Delivery & Payment</a>
        </li>
      </ul>`;

  if (loggedIn) {
    // If user is logged in, show username
    navContent += `
    <div class="btn-group mx-2">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="navbar-text pe-2">${userData[0].username}</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" id="logout" href="index.html">Logout</a></li>
        </ul>
      </div>`;
  } else {
    // If user is not logged in, show profile icon and login/signup options
    navContent += `
      <div class="btn-group mx-2">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-user-circle"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="login.html">Login</a></li>
          <li><a class="dropdown-item" href="signin.html">Sign Up</a></li>
        </ul>
      </div>`;
  }

  navContent += `
    <span class="navbar-text">
      <span id="cartCount" class="cart-count bg-success p-1 rounded-pill" style="color: white;">${cartCount}</span>
      <a style="color: black" href="checkout.html"><i class="fa-solid fa-shopping-cart"></i></a>
    </span>
    <span class="navbar-text d-flex mx-2 mt-2">
      <i id="searchIcon" class="fa-solid fa-search"></i>
      <div id="searchBar" class="ps-2 search-bar">
        <input type="text" class="search" id="s-input" placeholder="Search" style="width: 100%; border: none; border-bottom: 1px solid; padding-left: 10px;">
      </div>
    </span>
    <div id="searchResultsDropdown"></div>
  </div>
</div>`;
  return navContent;
};

document.addEventListener("DOMContentLoaded", () => {
  let searchIcon = document.getElementById("searchIcon");

  searchIcon.addEventListener("click", () => {
    let searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("active");
  });

  let searchInput = document.querySelector("#s-input");
  searchInput.addEventListener("input", (event) => {
    let query = event.target.value;
    debouncedSearch(query);
  });
});
export default nav;

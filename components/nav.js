let nav = () => {
  let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;
  let cCount = document.getElementById("cartCount");

  document.addEventListener("updateCartCount", (event) => {
    cartCount = event.detail.cartCount;
    cCount.innerText = cartCount;
  });

  return `<div class="container">
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
      <span class="navbar-toggler-icon"
        ><i class="fa-solid fa-bars"></i
      ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="allProducts.html"
            >Catalog</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#about">About</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="index.html#delivery"
            tabindex="-1"
            aria-disabled="true"
            >Delivery & Payment</a
          >
        </li>
      </ul>
      <div class="btn-group mx-2">
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="fa-solid fa-user-circle"></i>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="login.html">Login</a></li>
      <li><a class="dropdown-item" href="signup.html">Sign Up</a></li>
    </ul>
  </div>
      <span class="navbar-text mx-2">
        <span id="cartCount" class="cart-count bg-success p-1 rounded-pill" style="color: white;">${cartCount}</span>
        <a style="color: black" href="checkout.html"><i class="fa-solid fa-shopping-cart"></i></a>
      </span>
      <span class="navbar-text mx-2">
        <i  class="fa-solid fa-search"></i>
      </span>
    </div>
  </div>`;
};
export default nav;

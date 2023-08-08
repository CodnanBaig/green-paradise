

let BASEURL = "http://localhost:3000/";
let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;

let getPopular = async () => {
  try {
    let res = await fetch(`${BASEURL}products`);
    let data = await res.json();
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }
    let randomProducts = data.sort(() => Math.random() - 0.5).slice(0, 6);
    return randomProducts;
  } catch (err) {
    throw err;
  }
};

let popularProductsCarousel = async () => {
  let data = await getPopular();
  let swiperWrapper = document.getElementById("popular-products-container");

  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "swiper-slide");

    card.innerHTML = `
      <div class="product-card">
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
      </div>
    `;

    let addCart = card.querySelector(".addCart");
    addCart.addEventListener("click", () => {
      cartCount++;
      cartList.push(el);
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      localStorage.setItem("cart-count", JSON.stringify(cartCount));
      updateCartCountUI();
    });

    swiperWrapper.appendChild(card);
  });

  new Swiper(".swiper-container", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      415: {
        slidesPerView: 3,
      },
    },
  });

  updateCartCountUI();
};

function updateCartCountUI() {
  let cCount = document.getElementById("cartCount");
  cCount.innerText = cartCount;
}

export default popularProductsCarousel;

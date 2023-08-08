let BASEURL = "http://localhost:3000/";
let PopularProductsCarousel = {
    async init() {
      try {
        let randomProducts = await this.getPopular();
        let productScroll = document.getElementById("productScroll");
  
        let productCards = randomProducts.map((product) =>
          this.createProductCard(product)
        );
        productScroll.innerHTML = productCards.join("");
        let currentIndex = 0;
  
        let productCardsElements = document.querySelectorAll(".product-card");
        productCardsElements.forEach((productCard, index) => {
          productCard.addEventListener("click", () => {
            let selectedProduct = randomProducts[index];
            console.log(selectedProduct)
            window.location.href = "productDetails.html"
            localStorage.setItem("singleProduct", JSON.stringify(selectedProduct));
          });
        });
  
        setInterval(() => {
          currentIndex = (currentIndex + 3) % randomProducts.length;
          productScroll.style.transform = `translateX(-${
            currentIndex * (100 / 3)
          }%)`;
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  
    async getPopular() {
      try {
        let res = await fetch(`${BASEURL}products`);
        let data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        let randomProducts = data.sort(() => Math.random() - 0.5).slice(0, 6);
        console.log(randomProducts);
        return randomProducts;
      } catch (err) {
        throw err;
      }
    },
  
    createProductCard(product) {
      return `
        <div class="product-card">
          <div class="card">
            <img src="${product.img}" class="card-img-top" alt="Product Image" />
            <div class="card-body d-flex justify-content-between">
              <div class="details">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price} RS</p>
              </div>
              <button class="btn btn-primary buy-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    },
  };
  
  export default PopularProductsCarousel;
  
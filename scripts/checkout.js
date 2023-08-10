import footer from "../components/footer.js";
import nav from "../components/nav.js";
import popularProductsCarousel from "../components/popularProducts.js";
popularProductsCarousel();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

let userAdd = JSON.parse(localStorage.getItem("userAdd")) || [];
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
var options = {
  key: "rzp_test_M654vKdrqhRFgq",
  "amount": (100+ +localStorage.getItem("total-amount"))*100,
  name: userInfo.firstName,
  currency: "INR",
  description: "Acme Corp",
  image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
  prefill: {
    // "email": "gaurav.kumar@example.com",
    // "contact": +919900000000,
  },
  handler: function (response) {
    localStorage.clear();
    window.location.href = "thankyou.html"; // Change the URL to your actual "Thank You" page
  },
};
var rzp1 = new Razorpay(options);

document.addEventListener("DOMContentLoaded", function () {
  updatePaymentAmount();

  document.getElementById("pay").addEventListener("click", function (e) {
    updatePaymentDetails();
    rzp1.open();
    e.preventDefault();
  });
});

function updateCartCount() {
  var cartCountElement = document.getElementById("cartCount");
  var cartData = JSON.parse(localStorage.getItem("cart-list")) || [];
  var totalCount = cartData.length;

  cartCountElement.textContent = totalCount;
}

function updatePaymentAmount() {
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  console.log(data);
  var totalAmount = 0;

  data.forEach(function (product) {
    totalAmount += product.price;
  });

  let itemsTotal = document.getElementById("itemsTotal");
  localStorage.setItem("total-amount", JSON.stringify(totalAmount));
  itemsTotal.textContent = totalAmount.toFixed(2) + "RS";
  var paymentAmountElement = document.getElementById("paymentAmount");
  paymentAmountElement.textContent = 100 + +totalAmount.toFixed(2) + "RS";
  updateCartCount();
}

function updatePaymentDetails() {
  var userData = JSON.parse(localStorage.getItem("userData")) || {};
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  var totalAmount = 0;

  data.forEach(function (product) {
    totalAmount += product.price;
  });

  options.prefill.email = userData.email;
  options.prefill.contact = userData.mobile;
  options.amount = totalAmount;
  updateCartCount();
}

let displayCart = () => {
  let parent = document.getElementById("cart-items");
  parent.innerHTML = "";
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  data.forEach((el) => {
    let card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = `<div class="cards">
        <div class="row g-0">
          <div class="col-3">
            <img
              src=${el.img}
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-8 ps-2">
            <h5>${el.name}</h5>
            <p>${el.price}RS</p>
          </div>
          <div class="col-1 ps-2">
          <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>`;
    parent.append(card);
    let trashIcons = document.querySelectorAll(".fa-trash");
    trashIcons.forEach((trashIcon) => {
      trashIcon.addEventListener("click", handleTrashClick);
    });
  });
};

function handleTrashClick(event) {
  let indexToRemove = parseInt(event.target.getAttribute("data-index"));
  let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
  let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;
  let cCount = document.getElementById("cartCount");
  cartCount--;
  cCount.textContent = cartCount;
  cartList.splice(indexToRemove, 1);
  localStorage.setItem("cart-list", JSON.stringify(cartList));
  localStorage.setItem("cart-count", cartCount);

  displayCart();
}

displayCart();

console.log(userAdd, userInfo);
document.addEventListener("DOMContentLoaded", () => {
  const personalInfoSection = document.getElementById("personalInfoSection");
  const deliverySection = document.getElementById("deliverySection");
  const paymentSection = document.getElementById("paymentSection");

  const personalInfoContinueButton = document.getElementById(
    "personalInfoContinue"
  );
  const deliveryBackButton = document.getElementById("deliveryBack");
  const deliveryContinueButton = document.getElementById("add-submit");
  const paymentBackButton = document.getElementById("paymentBack");
  const paymentContinueButton = document.getElementById("pay");

  personalInfoContinueButton.addEventListener("click", () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    if (!firstName || !lastName || !email || !mobile) {
      alert("All fields are mandatory");
    } else {
      var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
      };

      localStorage.setItem("userInfo", JSON.stringify(userData));
      personalInfoSection.style.display = "none";
      deliverySection.style.display = "block";
    }
  });

  deliveryBackButton.addEventListener("click", () => {
    deliverySection.style.display = "none";
    personalInfoSection.style.display = "block";
  });

  deliveryContinueButton.addEventListener("click", (event) => {
    event.preventDefault();

    let address = document.getElementById("address").value;
    let landmark = document.getElementById("landmark").value;

    let city = document.getElementById("city").value;
    let po = document.getElementById("pincode").value;

    if (address == "" || landmark == "" || city == "" || po == "") {
      alert("Please Fill All Details");
    } else {
      localStorage.setItem(
        "userAdd",
        JSON.stringify({ address, landmark, city, po })
      );
      deliverySection.style.display = "none";
      paymentSection.style.display = "block";
    }
  });

  paymentBackButton.addEventListener("click", () => {
    paymentSection.style.display = "none";
    deliverySection.style.display = "block";
  });

});

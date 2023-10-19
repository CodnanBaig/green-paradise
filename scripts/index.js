import footer from "../components/footer.js";
import nav from "../components/nav.js";
import popularProductsCarousel from "../components/popularProducts.js";
popularProductsCarousel();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();


let BASEURL = "https://erin-smoggy-worm.cyclic.app/";

let getData = async () => {
  try {
    let res = await fetch(`${BASEURL}products`);
    let data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

let planters = document.getElementById("Planters");
planters.addEventListener("click", async () => {
  let data = await getData();
  let selectedCategory = data.filter((el) => {
    if (el.category == planters.id) {
      return el;
    }
  })
  localStorage.setItem("selected-category", JSON.stringify(selectedCategory));
  window.location.href = "category.html";
  console.log(selectedCategory);
})

let faux = document.getElementById("Faux");
faux.addEventListener("click", async () => {
  let data = await getData();
  let selectedCategory = data.filter((el) => {
    if (el.category == faux.id) {
      return el;
    }
  })
  localStorage.setItem("selected-category", JSON.stringify(selectedCategory));
  window.location.href = "category.html";
  console.log(selectedCategory);
})

let flowering = document.getElementById("Flowering");
flowering.addEventListener("click", async () => {
  let data = await getData();
  let selectedCategory = data.filter((el) => {
    if (el.category == flowering.id) {
      return el;
    }
  })
  localStorage.setItem("selected-category", JSON.stringify(selectedCategory));
  window.location.href = "category.html";
  console.log(selectedCategory);
})

let easy = document.getElementById("Easy-Care");
easy.addEventListener("click", async () => {
  let data = await getData();
  let selectedCategory = data.filter((el) => {
    if (el.category == easy.id) {
      return el;
    }
  })
  localStorage.setItem("selected-category", JSON.stringify(selectedCategory));
  window.location.href = "category.html";
  console.log(selectedCategory);
})


import footer from "../components/footer.js";
import nav from "../components/nav.js";
import PopularProductsCarousel from "../components/popularProducts.js";
PopularProductsCarousel.init();

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

let BASEURL = "http://localhost:3000/";

let getData = async () => {
  try {
    let res = await fetch(`${BASEURL}products`);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    throw err;
  }
};

getData();

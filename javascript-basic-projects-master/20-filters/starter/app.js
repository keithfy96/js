console.log("filters project");
let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

function displayProducts() {
  // if statement
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = "sorry no products dog";
  } else {
    productsContainer.innerHTML = filteredProducts
      .map(({ id, title, image, price }) => {
        return `<article class="product" data-id="${id}">
      <img
      src="${image}"
      alt=""
      class="product-img img"
      />
      <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
      </footer>
      </article>`;
      })
      .join("");
  }
}

displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  // keyup - fired when key released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// filter buttons

const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
};

displayButtons();

const buttons = document.querySelectorAll(".company-btn");
console.log(buttons);

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    const company = e.target.innerHTML;
    if (company === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === company;
      });
    }
    displayProducts();
  });
});

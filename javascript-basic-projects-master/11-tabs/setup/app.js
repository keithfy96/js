const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });
    // hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

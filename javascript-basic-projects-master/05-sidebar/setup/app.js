const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  console.log("sidebar toggle");
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  console.log("close btn");
  sidebar.classList.remove("show-sidebar");
});

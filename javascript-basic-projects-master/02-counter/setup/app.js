let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// my solution
// console.log(btns);
// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const styles = event.currentTarget.classList;
//     if (event.currentTarget.classList.contains("decrease")) {
//       value.textContent -= 1;
//     } else if (event.currentTarget.classList.contains("reset")) {
//       value.textContent = 0;
//     } else if (event.currentTarget.classList.contains("increase")) {
//       value.textContent += 1;
//     }
//   });
// });

// john solution
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

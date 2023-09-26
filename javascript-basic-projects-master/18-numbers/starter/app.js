console.log("numbers project");

const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  console.log(value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  console.log(initialValue);
  console.log(el);

  const increaseCount = setInterval(() => {
    initialValue += increment;
    // console.log("interval ran");
    // console.log(initialValue);
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
    // el.textcontent = initialValue;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});

const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// console.log(btn, result);

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });

    console.log(response);
    if (!response.ok) {
      result.innerHTML = "there was an error 1";
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error.. 2 ";
  }
};

fetchDadJoke();

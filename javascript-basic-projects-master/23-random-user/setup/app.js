import get from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);
  // dispaly user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

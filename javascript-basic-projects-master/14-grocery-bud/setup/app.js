// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);

container.addEventListener("click", (event) => {
  const target = event.target.parentElement;
  console.log(target.classList.contains("delete-btn"));
  if (target.classList.contains("delete-btn")) {
    deleteItem(target);
  } else if (target.classList.contains("edit-btn")) {
    editItem(target);
  }
});
// ****** FUNCTIONS **********
function addItem(event) {
  event.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// display alert
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};
// function displayAlert(text,action) {
// }

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      if (list.children.length === 0) {
        container.classList.remove("show-container");
      }
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete function
function deleteItem(event) {
  console.log(event);
  // const element = event.currentTarget.parentElement.parentElement;
  const element = event.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "success");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

// edit function
function editItem(event) {
  // const element = event.currentTarget.parentElement.parentElement;
  const element = event.parentElement.parentElement;
  // set edit item
  console.log(element);
  editElement = event.parentElement.previousElementSibling;
  console.log(editElement);
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

const setBackToDefault = () => {
  console.log("set back to default");
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textcontent = "submit";
};
// set back to default

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
  // console.log("added to local storage");
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  // console.log(items);
};

const removeFromLocalStorage = (id) => {
  let items = getLocalStorage();
  items = items.filter((item) => {
    // if (item.id !== id) {
    //   return item;
    // }
    return item.id !== id;
  });
  localStorage.setItem("list", JSON.stringify(items));
};

const editLocalStorage = (id, value) => {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

const createListItem = (id, value) => {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  // edit function
  // const editBtn = element.querySelector(".edit-btn");
  // // delete function
  // const deleteBtn = element.querySelector(".delete-btn");
  // deleteBtn.addEventListener("click", deleteItem);
  // editBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(element);
};

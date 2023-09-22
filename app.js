// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
console.log(children);

const showScore = (name, score) => {
  console.log(`hello ${name}, your score is ${score}`);
};

const firstID = setInterval(showScore, 4000, "bob", 30);

setTimeout(clearInterval, 12000, firstID);

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

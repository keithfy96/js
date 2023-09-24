function Counter(element, value) {}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

firstCounter.increase();
firstCounter.increase();
firstCounter.increase();
firstCounter.reset();

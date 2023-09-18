import { students } from "./data.js";

console.log("hello");

console.log(students);

// updated students

const updatedStudents = students.map((currItem) => {
  currItem.role = "student";
  return currItem;
});

console.log(updatedStudents);

// high scores

const highScores = updatedStudents.filter((currItem) => {
  return currItem.score >= 80;
});

console.log(highScores);

// specific id

const specificId = updatedStudents.find((currItem) => {
  return (currItem.id = 2);
});

console.log(specificId);

// average score

const averageScore =
  students.reduce((acc, currItem) => {
    acc += currItem.score;
    return acc;
  }, 0) / students.length;

console.log(averageScore);

const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team = players;

// Create a copy of players
const team1 = players.slice();

// Create a copy of person
const cap1 = Object.assign({}, person);

// Test if the variables have been created correctly
console.log(team);
console.log(team1);
console.log(cap1);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

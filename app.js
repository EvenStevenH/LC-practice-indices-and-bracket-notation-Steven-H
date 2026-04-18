// Task 1: Create a multi-dimensional array
const library = [
	["Book 1", "Book 2", "Book 3"],
	["Book 4", "Book 5", "Book 6"],
	["Book 7", "Book 8", "Book 9"],
];

// Task 2: Access and log all the elements > bracket notation with numbers
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);
console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);
console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2], "\n");

// Task 3: Access and log all the elements > variables as indices
let row = 0;
let item = 0;

console.log(library[row][item], "\n");

for (row = 0; row < library.length; row++) {
	for (item = 0; item < library[row].length; item++) {
		console.log(library[row][item]);
	}
}

// Task 4: Loop that prints all the items on the second shelf
let secondShelf = [1]; // index of the second shelf

for (let i = 0; i < library[secondShelf].length; i++) {
	console.log(library[secondShelf][i]);
}

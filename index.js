/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
	// write your code here
	return a + b;
}

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(number) {
	// write your code here
	return number % 2 === 0;
}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {
	// write your code here
	return `Hello, ${name}!`;
}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
	// write your code here
	return age >= 18;
}

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {
	// write your code here
	return 18 - age;
}

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(person) {
	// write your code here
	// use greet, isAnAdult and yearsToAdulthood to help you!
	if (isAnAdult(person.age)) {
		return greet(person.name);
	} else {
		return `Come back in ${yearsToAdulthood(person.age)} years`;
	}
}

const number1 = add(2, 3);
const number2 = add(5, 9);
const number3 = add(6, 4);
const number4 = add(10, 111);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log("\n\n");

const number1EvenCheck = isEven(5);
const number2EvenCheck = isEven(12);
const number3EvenCheck = isEven(11);
const number4EvenCheck = isEven(14);
console.log(number1EvenCheck);
console.log(number2EvenCheck);
console.log(number3EvenCheck);
console.log(number4EvenCheck);

console.log("\n\n");

people = [
	{ age: 12, name: "Ed" },
	{ age: 18, name: "Rinor" },
	{ age: 60, name: "Geri" },
	{ age: 8, name: "Arita" },
	{ age: 42, name: "Artiola" },
];

for (const person of people) {
	console.log(greet(person.name));
}
console.log("\n\n");

for (const person of people) {
	console.log(isAnAdult(person.age));
}
console.log("\n\n");

for (const person of people) {
	if (person.age < 18) {
		console.log(yearsToAdulthood(person.age));
	}
}
console.log("\n\n");

for (const person of people) {
	console.log(admit(person));
}
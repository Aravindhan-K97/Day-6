class Person {
  constructor(firstName, lastName, work, place) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.work = work;
    this.place = place;

    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
}

let personOne = new Person(
  "Harshavardhan",
  "Rajinikanth",
  "Fullstack Developer",
  "Chennai"
);

console.log(personOne.getFullName());
console.log(personOne.work);

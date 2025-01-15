function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will throw an error because user is an array, not a string. 
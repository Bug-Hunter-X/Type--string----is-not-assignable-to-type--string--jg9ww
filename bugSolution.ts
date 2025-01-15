function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will correctly greet Jane Doe
console.log(greeter("Jane")); //This will correctly greet Jane
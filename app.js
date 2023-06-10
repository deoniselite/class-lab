//Hamster Class
class Hamster {
    constructor(name) {
      this.owner = "";
      this.name = name;
      this.price = 15;
    }
  
    wheelRun() {
      console.log("squeak squeak");
    }
  
    eatFood() {
      console.log("nibble nibble");
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  let hamster = new Hamster("Fluffy");
console.log(hamster.name);       

hamster.wheelRun();              
hamster.eatFood();               
console.log(hamster.getPrice()); 

class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }

  let person = new Person("John");

console.log(person.getName());    // Output: "John"
console.log(person.getAge());     // Output: 0
console.log(person.getWeight());  // Output: 0

person.greet();                   // Output: "Hello, my name is John."

person.eat();
console.log(person.getWeight());  // Output: 1
console.log(person.mood);         // Output: 1

person.exercise();
console.log(person.getWeight());  // Output: 0

person.ageUp();
console.log(person.getAge());     // Output: 1
console.log(person.height);       // Output: 1
console.log(person.getWeight());  // Output: 1
console.log(person.mood);         // Output: 0
console.log(person.bankAccount);  // Output: 10

let Hamster = new hamster("Fluffy");
person.buyHamster(hamster);
console.log(person.hamsters);     // Output: [Hamster]
console.log(person.mood);         // Output: 10
console.log(person.bankAccount);  // Output: -15



let timmy = new Person("Timmy");


for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}


for (let i = 0; i < 5; i++) {
  timmy.eat();
}


for (let i = 0; i < 5; i++) {
  timmy.exercise();
}


for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}


let gus = new Hamster("Gus");

gus.owner = "Timmy";


timmy.buyHamster(gus);


for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}


for (let i = 0; i < 2; i++) {
  timmy.eat();
}

for (let i = 0; i < 2; i++) {
  timmy.exercise();
}


class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  let chef = new Chef();
  
  let dinner1 = chef.createDinner("Salad", "Grilled Chicken", "Chocolate Cake");
  let dinner2 = chef.createDinner("Soup", "Steak", "Cheesecake");
  let dinner3 = chef.createDinner("Bruschetta", "Pasta", "Tiramisu");
  
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);
  
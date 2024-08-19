class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  displayInfo() {
    return `Car: ${this.make} ${this.model}`;
  }
}

class Truck extends Vehicle {
  displayInfo() {
    return `Truck: ${this.make} ${this.model}`;
  }
}

class Motorcycle extends Vehicle {
  displayInfo() {
    return `Motorcycle: ${this.make} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
const truck = new Truck("Ford", "F-150");
const motorcycle = new Motorcycle("Harley-Davidson", "Sportster");

console.log(car.displayInfo());
console.log(truck.displayInfo());
console.log(motorcycle.displayInfo());

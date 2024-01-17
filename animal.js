class Gyvunas {
  constructor(name, age, legs) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
}

console.log(Gyvunas);

class dogs extends Gyvunas {
  constructor(name, age, legs, fur, tail, muzzle) {
    super(name, age, legs);
    this.fur = fur;
    this.tail = tail;
    this.muzzle = muzzle;
  }
}

console.log(dogs);

class cats extends Gyvunas {
  constructor(name, age, legs, whiskers) {
    super(name, age, legs);
    this.whiskers = whiskers;
  }
}

console.log(cats);

class birds extends Gyvunas {
  constructor(name, age, legs, wings, beak) {
    super(name, age, legs);
    this.wings = wings;
    this.beak = beak;
  }
}

console.log(birds);

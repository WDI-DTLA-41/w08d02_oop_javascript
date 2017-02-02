class Animal {
  constructor (sound){
    this.sound = sound;
  }
  speak(){
    return `${this.name} says ${this.sound}`;
  }
}

class Cat extends Animal {
  constructor(sound, name){
    super();
    this.name = name;
    this.sound = sound;
  }
  sound(){
    return this.sound;
  }
}

let superCat = new Cat('meowmeowmeow', 'Cinder');

console.log(superCat.speak());
console.log(superCat instanceof Animal);
console.log(superCat instanceof Cat);

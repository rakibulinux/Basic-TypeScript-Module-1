class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(
      `The ${this.name} sound is  like ${this.sound} from ${this.species}`
    );
  }
}

const human = new Animal("Rakib", "humen", "Wow");
human.makeSound();

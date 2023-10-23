// This class manages the "Biome" class.
class Zoo {
    constructor(biomes) {
        this.biomes = biomes;
    }
    
    findbestBiome(animal){
        let bestNum = 0;
        let bestbiome;
    
        for (let biome of this.biomes) {
            let total = 0;
            if (animal.prefForest === biome.isForested) {
                total++
            }
            if (animal.prefTemp === biome.temperature) {
                total++
            }
            if (total > bestNum) {
                bestbiome = biome;
                bestNum = total;
            }
        }
        console.log(bestbiome)
        bestbiome.currentAnimals.push(animal);
    }
}
// This class represents what a "Biome" is.
class Biome {
    constructor(name,isForested,temperature) {
        this.name = name;
        this.isForested = isForested;
        this.temperature = temperature;
        this.currentAnimals = [];
    }
}

const jungle = new Biome("Jungle", true, 65);
const savanah = new Biome("Savanah", false, 80);

let biomes = [jungle,savanah];
let bAndH = new Zoo(biomes);

// This class represents what an "Animal" is.
class Animal {
    constructor(name,prefForest,prefTemp) {
        this.name = name;
        this.prefForest = prefForest;
        this.prefTemp = prefTemp;
    }
}

const elephant = new Animal("Elephant",false,[65,99]);

// This function gets the user input to create a new animal.
function newAnimal() {
    let animalName = prompt("What is the animal's name?");
    let location = prompt("Does it prefer forest?");
    let temp = prompt("Prefered temperature?");
    console.log(`Animal: ${animalName}, Location: ${location}, Temp: ${temp}`);
    const newAnimalInstance = new Animal(animalName, location, temp);
    console.log(newAnimalInstance)
}

// This is the DOM manipulation.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('animalForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const animalName = document.getElementById('animalName').value;
        const prefForest = document.getElementById('prefForest').value === "true";
        const prefTemp = parseInt(document.getElementById('prefTemp').value);
        
        const newAnimal = new Animal(animalName, prefForest, prefTemp);
        bAndH.findbestBiome(newAnimal);
        
        // Display current animals
        let output = "";
        bAndH.biomes.forEach(biome => {
            output += `<h2>${biome.name}</h2><ul>`;
            biome.currentAnimals.forEach(animal => {
                output += `<li>${animal.name}</li>`;
            });
            output += `</ul>`;
        });
        
        document.getElementById('animalList').innerHTML = output;
    });
});


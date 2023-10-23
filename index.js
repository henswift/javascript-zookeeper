/* What functionality do we want?

    If a biologist found a new animal we could classify it. 

    The end user can put in descriptors about what they see and it would tell them what class they are in

    Does it have fur? = Mammels

    We would have to guide the user to the right category

    We have to define our arena


    The first step:

     We need animals



     We could make a tool for a new zookeeper to see if he could put to animals together

     make properties for all the animals - like isAMeatEater

     then maybe make new animals and see how they relate


let pokemon = ['Pikachu','Charmander','Squirtle'];
let question = `Which of the following do you select?`

let choice = getSelection(question,pokemon);
console.log(choice);

function getSelection(question,options) {

    let string = "";
    for (let x = 0; x < options.length; x++) {
        string += '\n' + `${x+1}: ${options[x]}`;
    }

    let choice = prompt(`${question} \n ${string}`);
    return options[choice-1]
}





    */

 /* What we need    
    Animal objects
        That would be subdivided into 


        Classes:
            Habitats
                Two Land Habitats
                Two Aquatic Habitats


            Known Animal Traits

            Each animal object would have a set of traits

            Does it breath air?





            Switching it up - kick the zoo

            Putting them in the wild

            Don't care if they eat each other

            Just check if they would suit in the enviroment

            We have two objects affecting each other

            We have a clock keeping track of the years. 

            Simply checking for strings

            Present the user with a template so they can put in whtat they obverve about the animale
            We will see what matches the best 

        The Two Habitats

            The Jungle

            The Savanah


            




 
 */

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

class Animal {
    constructor(name,prefForest,prefTemp) {
        this.name = name;
        this.prefForest = prefForest;
        this.prefTemp = prefTemp;
    }
}

const elephant = new Animal("Elephant",false,[65,99]);

function newAnimal() {
    let animalName = prompt("What is the animal's name?");
    let location = prompt("Does it prefer forest?");
    let temp = prompt("Prefered temperature?");
    console.log(`Animal: ${animalName}, Location: ${location}, Temp: ${temp}`);
    const newAnimalInstance = new Animal(animalName, location, temp);
    console.log(newAnimalInstance)
}



//Takes one animal object
// For each biome in biomes 
    // Test the animal against a certain set of properties
    // 
    // Test it against isForested and prefTemp
    //Keep track of the number of matches
    //Output the biome with the most matches


// console.log(elephant)


// Now we need to create a function so that when the user puts in the traits it will 
// first create the animal 
// and then check the animal
// We need a way to iterate through the biomes
// create a for biomes in biomes loop and check the properties


// console.log(jungle)

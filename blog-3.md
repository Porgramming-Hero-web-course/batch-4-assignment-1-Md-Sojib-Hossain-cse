Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


Sometimes Pre defined types can't properly specified our needs . In that case we are using type guard to narrow down types and make our code more specific.

There are some kind of type guard in TypeScript. Those are: 
1. type of guard
2. In guard 
3. instance of guard




typeof guard - In typeof guard we use typeof keyword for type guard .
syntax : typeof variable/parameter ==="type" 

Example : 
const add = (param1 : string | number , param2 : string | number):string | number => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }





In guard - Type In guard use in keyword for type guard .
syntax : "propertyName/keyName" in object

Example : 
type NormalUser = {
        name : string;
    }

    type AdminUser = {
        name : string;
        role : "admin";
    }

    const getUser = (user : NormalUser | AdminUser) : void => {
        if("role" in user){
            console.log(`I'm ${user.name} and my role is ${user.role}.`);
        }
        else{
            console.log(`I'm ${user.name} and my role is user.`);
        }
    }

    const normalUser : NormalUser = {
        name : "Sojib",
    }

    const adminUser : AdminUser = {
        name : "Ariful",
        role : "admin",
    }

    getUser(normalUser);
    getUser(adminUser);






In guard - instanceof guard use instanceof keyword for type guard . It usually use in class .
syntax : parameter instanceof Instance.

Example : 
class Animal {
        name : string;
        species : string;
        constructor ( name : string , species : string){
            this.name = name ;
            this.species = species;
        }

        makeSound(){
            console.log("Im making Sound")
        }
    }

    class Dog extends Animal{
        constructor(name : string,  species : string){
            super(name , species)
        }
        makeBark(){
            console.log("Im Barking")
        }
    }

    class Cat extends Animal{
        constructor(name : string,  species : string){
            super(name , species)
        }
        makeMeaw(){
            console.log("Im Meawing")
        }
    }

    const isDog = (animal : Animal) : boolean => {
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal) : animal is Cat  => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        if(animal instanceof Dog){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog("Bagha" , "Dog");
    const cat = new Cat("Mini" , "Cat");

    getAnimal(dog);
    getAnimal(cat);

class Key{
    private signature: number
    constructor() {
        this.signature=Math.random()
    }
    getSignature():number {
         return this.signature
    }
      
    
}
class Person{
    private  key:Key
    getKey() {
         return this.key
    }
    constructor(key: Key) {
        this.key=key
    }
}
abstract class House {
    door: boolean = false
    key: Key
    comeHome: Person[] = []

    constructor(key: Key) {
        this.key=key
    }
 comeIn(person: Person) {
        if (this.door) {
            this. comeHome.push(person)
            console.log('The door is open,welcome')
        }
        console.log('The door could not be opened')
    }
     
    abstract openDoor(key: Key):void      
     
}
class MyHouse extends House{
     
     openDoor(key: Key) :void  {
        if (key.getSignature()===this.key.getSignature()) {
            this.door = true
            console.log('The door is open ')
         } else{ console.log('the key does not fit, maybe another one?') }
        
     }
     
        
}
 
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
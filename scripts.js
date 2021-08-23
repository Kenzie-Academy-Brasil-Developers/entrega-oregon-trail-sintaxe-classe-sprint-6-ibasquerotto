class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food > 0){
            this.food -= 1
        }
        else {
            this.isHealthy = false
        }
    }

    
 
}


class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.travelers = []
    }

    getAvailableSeatCount(){
        return this.capacity - this.travelers.length
    }

   join(n){
        if(this.getAvailableSeatCount() > 0) {
             this.travelers.push(n)
        }
    }

    shouldQuarantine(){
        for(let i = 0; i < this.travelers.length; i++){
            if (this.travelers[i].isHealthy === false){
                return true
            }
            
        }
        return false
    }

    totalFood(){
        let totalFood = 0
        for (let i=0; i < this.travelers.length; i++){
            totalFood += this.travelers[i].food
        }
        return totalFood
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);

// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)


 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

const user = {
    name: 'Andrew',
    cities: ['New York','Los Angeles', 'Las Vegas'],
    //printPlacesLived : function() {
        //this.cities.forEach((city) => {
      //      console.log(this.name + ' lived in ' + city);
    //});
    printPlacesLived() { 
            return this.cities.map((city) => this.name + ' lived in ' + city);
        }
    }

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1 , 4 , 6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
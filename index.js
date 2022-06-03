function Car (mark, model, year){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.getCarInfo = function(){
        document.write(this.mark + " " + "Model" + " " + this.model + " " + " is realised in" + " " + this.year + "<br>")
    };
}
function Person(name, age){
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
        document.write("სახელი" + " " + this.name + " " + "ასაკი" + " " + this.age);
    }
    this.carInfo = function(){
        document.write(this.name +" "+ "არის" + " " + this.age + " " + "წლის და ჰყავს მანქანა" + " " + car.mark + " " + car.model + " "+ "გამოშვებული" + " " + car.year + " " + "წელს");
}
}
var tom = new Person("ტომი", 25);
var car = new Car ("bentley", "continental", "2022");
car.getCarInfo();
tom.carInfo();


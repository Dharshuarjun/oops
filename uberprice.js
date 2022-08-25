function UberPrice(price){
    this.price=price
    this.calculate=function(){
        console.log(`uber price is ${this.price}`)
    }

}
var CalculateUberprice= new UberPrice("20$");
CalculateUberprice.calculate();
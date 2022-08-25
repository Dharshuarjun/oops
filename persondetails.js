// Write a “person” class to hold all the details

class person{
    constructor(name,email,address,occupation){
        this.name=name,
        this.email=email,
        this.address=address,
        this.occupation=occupation;
    }
    login(){
        console.log(this.email,"already logged in")
        return this;
    }
    logout(){
        console.log(this.email,"already logged out")
        return this;
    }
    area(){
        console.log(this.address,"Your address is incorrect")
    }
}
var Person1=new person("Rani","rani27.gmail.com","chennai","Engineer");
var Person2=new person("Seetha","seetha45@gmail.com","coimbatore","Doctor");

Person1.login().logout();
Person2.area();
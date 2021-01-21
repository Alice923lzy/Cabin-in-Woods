/*function Person(namein,colorin){
    this.name=namein;
    this.color=colorin;
    this.greet = function(){
         console.log("hello, I am "+this.name+" and my fav color is "+this.color);
    }
}
equal with the class method
*/

class Person{
    constructor(name,color){
        this.name = name;
        this.color = color;

    }

    greet(){
        console.log("hello, I am "+this.name+" and my fav color is "+this.color);
    }
}
export default Person; // if someone import this file, what will be the export from this file
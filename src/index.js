import "./styles.css";

//forma de se criar uma classe em ES5
var aClass1 = function() {
  this.name = "ES5";

  this.sayHello = function() {
    return "Hi, I'm " + this.name;
  };
};

var obj1 = new aClass1();

// ES6
class aClass2 {
  constructor() {
    this._name = "ES6";
  }

  get name() {
    return `Ms ${this._name}`;
  }

  set name(value) {
    this._name = value;
  }

  sayHello() {
    //var times = 3;
    const times = 3;
    //var hiWord = "hey ";
    const hiWord = "hey ";

    //var hiPharse = "";
    let hiPharse = "";

    //for(var i=0; i<times; i++) {
    for (let i = 0; i < times; i++) {
      hiPharse += hiWord;
    }

    //return hiPharse + "Hi, I'm " + this.name;
    return `${hiPharse} Hi, I'm ${this.name}`; //
  }
  //for....in

  //for... of

  //usando template string
  //`${}`
}

var obj2 = new aClass2();

document.getElementById("app").innerHTML = obj2.sayHello();

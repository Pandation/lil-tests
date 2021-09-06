var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var machin = "Coucou"; //type String
var boolean = true; // boolean
var number = 14; //number
var numberArray = [16, 13, 35]; // array number
var secondArray = [15, 18]; // second method
var thirdArray = [14, true, false]; // multiple options
var tuple = [13, "doe", "john"]; // tuple
var tupleExpert = [{}, true, ["", 15], { level: "string" }]; // multiple assignations
var object = {
    name: "John",
    alive: true
}; // object + conditionnal property "?"
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["SUBSCRIBER"] = 1] = "SUBSCRIBER";
    Role[Role["WRITER"] = 4] = "WRITER";
    Role[Role["ADMIN"] = 5] = "ADMIN";
})(Role || (Role = {}));
// if (Role.USER === 0) console.log(true);
//console.log(Role[5]); // log : ADMIN
var any = "typescript doesn't care"; // anything I want, typescript will not verify
var unknownVar = true;
var var2;
if (typeof unknownVar === "number") {
    var2 = unknownVar;
} // Test unknown with IF
var boolVar;
typeof unknownVar === "boolean" ? (boolVar = unknownVar) : ""; // works also with ternary cond
function returnVoid() {
    console.log("You return nothing John Snow!");
} // type Void for functions (We use type null or undefined for variables)
function returnNum(num) {
    if (num === void 0) { num = 15; }
    console.log(num);
}
var funct = returnVoid; //generic Function type
var age;
age = returnNum; //specific function type
// console.log(age(null))
//rest parameters
var colors = function (arg1) {
    var restOfArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfArgs[_i - 1] = arguments[_i];
    }
    console.log(arguments); //array with all args given to the function
    console.log(arg1, restOfArgs);
};
//colors("Title", "Elem1", "Elem2", "Elem3");
//callbacks
function gift(age, sum) {
    var memberAge = age + 3;
    sum(memberAge); //number
}
// gift(40, (num) => {
//   console.log(num) // void
// })
function concatenate(arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else {
        result = arg1.toString() + arg2.toString();
    }
}
console.log(concatenate(10, 20)); //  number 30
console.log(concatenate("Hello", "World")); //  HelloWorld
console.log(concatenate("Hello", 20)); //  Hello20
var object1 = {
    color: "red",
    strength: 23,
    effect: false
};
//literal types
var color = "red";
var timingFunc;
timingFunc = "ease-in";
function total(arg1) {
    if (arg1 === void 0) { arg1 = 0; }
    console.log(arg1);
}
//never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something went wrong");
}
//null & undefined
var numberAgain = null;
// let numberNull: null = 13; Not working
var u = (function () {
    return;
})();
var unOrElse;
//AS & Angle-bracket
var variable = "This is a string";
// let myString: string = variable; Error
var myString2 = variable;
var myString3 = variable.length;
var htmlInput; //lot of html types
var Mother = /** @class */ (function () {
    function Mother(name, firstname, age, secret) {
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.secret = secret;
    }
    //typescript is so cool
    Mother.getSomething = function () {
        return Mother.something;
    };
    Mother.something = "Special Thing";
    return Mother;
}());
// Mother.thing  doesn't work
Mother.getSomething();
var Guy = /** @class */ (function () {
    function Guy() {
    }
    Guy.prototype.speak = function () {
        console.log("Hello!");
    };
    Guy.prototype.gender = function () {
        console.log("I'm a male");
    };
    return Guy;
}());
// abstract Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.hello = function () {
        console.log("Hello ");
    };
    return Person;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Father.prototype.speak = function () {
        _super.prototype.hello.call(this);
        console.log("You");
    };
    return Father;
}(Person));
var person = new Father();
// person.speak()
//generics
function genericType(arg) {
    console.log(arg);
    return arg;
}
var output1 = genericType("Hello");
var output2 = genericType("Hello"); //other way

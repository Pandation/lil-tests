let machin: string = "Coucou"; //type String
let boolean: boolean = true; // boolean
let number: number = 14; //number
let numberArray: Array<number> = [16, 13, 35]; // array number
let secondArray: number[] = [15, 18]; // second method
let thirdArray: (number | boolean)[] = [14, true, false]; // multiple options
let tuple: [number, string, string] = [13, "doe", "john"]; // tuple
let tupleExpert: [object, any, [string, boolean | number], { level: string }] =
  [{}, true, ["", 15], { level: "string" }]; // multiple assignations

let object: {
  level?: number | string;
  name: string;
  alive: boolean;
} = {
  name: "John",
  alive: true,
}; // object + conditionnal property "?"

enum Role {
  USER, // 0
  SUBSCRIBER, // 1
  WRITER = 4, // 4 now
  ADMIN, // so 5 here
}
// if (Role.USER === 0) console.log(true);
//console.log(Role[5]); // log : ADMIN

let any: any = "typescript doesn't care"; // anything I want, typescript will not verify

let unknownVar: unknown = true;
let var2: number;
if (typeof unknownVar === "number") {
  var2 = unknownVar;
} // Test unknown with IF
let boolVar: boolean;
typeof unknownVar === "boolean" ? (boolVar = unknownVar) : ""; // works also with ternary cond

function returnVoid(): void {
  console.log("You return nothing John Snow!");
} // type Void for functions (We use type null or undefined for variables)

function returnNum(num: number = 15): void {
  console.log(num);
}
let funct: Function = returnVoid; //generic type

let age: (num: number) => void;
age = returnNum; //specific function type

// console.log(age(null))

//rest parameters
let colors = function (arg1: string, ...restOfArgs: string[]) {
  console.log(arguments); //array with all args given to the function
  console.log(arg1, restOfArgs);
};

//colors("Title", "Elem1", "Elem2", "Elem3");

//callbacks

function gift(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge); //number
}

// gift(40, (num) => {
//   console.log(num) // void
// })

function concatenate(arg1: string | number, arg2: string | number) {
  let result;
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + arg2;
  } else {
    result = arg1.toString() + arg2.toString();
  }
}

console.log(concatenate(10, 20)); //  number 30
console.log(concatenate("Hello", "World")); //  HelloWorld
console.log(concatenate("Hello", 20)); //  Hello20

//type Aliases
type StrOrBool = string | boolean;
type myObject = {
  color?: string;
  strength: number;
  effect?: StrOrBool;
};

let object1: myObject = {
  color: "red",
  strength: 23,
  effect: false,
};

//literal types
let color: "red" | "blue" = "red";
type timingFunction = "ease-in" | "ease-out"; // + aliases
let timingFunc: timingFunction;
timingFunc = "ease-in";

function total(arg1: 12 | 0 = 0): void {
  console.log(arg1);
}

//never
function error(message: string): never {
  throw new Error(message);
}

function fail(): never {
  return error("Something went wrong");
}

//null & undefined
let numberAgain: number = null;
// let numberNull: null = 13; Not working
let u: undefined = ((): undefined => {
  return;
})();
let unOrElse: undefined | number;

//AS & Angle-bracket
let variable: unknown = "This is a string";
// let myString: string = variable; Error
let myString2: string = variable as string;
let myString3: number = (<string>variable).length;

let htmlInput: HTMLInputElement; //lot of html types

class Mother {
  private static something = "Special Thing";
  constructor(
    protected name: string,
    public firstname: string,
    readonly age: number,
    private secret: string
  ) {}
  //typescript is so cool

  static getSomething() {
    return Mother.something;
  }
}
// Mother.thing  doesn't work
Mother.getSomething();

//interfaces

interface Human {
  speak() : void; 
}

interface Male {
  gender() : void;
}

class Guy implements Human, Male {
  speak() {
    console.log("Hello!")
  }

  gender() {
    console.log("I'm a male")
  }
}

// abstract Classes

abstract class Person {
  speak() {
    console.log("Hello")
  };
}

class Father extends Person {
  speak() {
    super.speak()
    console.log("You")
  }
}
let person = new Father()
// person.speak()
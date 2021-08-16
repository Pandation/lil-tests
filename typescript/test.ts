let machin: string = "Coucou"; //type String
let boolean: boolean = true; // boolean
let number: number = 14; //number
let nulberArray: Array<number> = [16, 13, 35]; // array number
let secondArray: number[] = [15, 18]; // second method
let thirdArray: (number | boolean)[] = [14, true, false]; // multiple options
let tuple: [number, string, string] = [13, "doe", "john"]; // tuple
let tupleExpert: [object, any, [string, boolean | number], { level: string }] =
  [{}, true, ["", 15], { level: "string" }]; // multiple assignations
let object: {
    level?: number | string;
    name: string;
    alive: boolean
} = {
    name: "John",
    alive: true
} // object + conditionnal property "?"

enum Role {
    USER, // 0
    SUBSCRIBER, // 1
    WRITER = 4, // 4 désormais
    ADMIN // donc 5 ici
}
if (Role.USER === 0) console.log(true); 
console.log(Role[5]) // log : ADMIN

let any: any = "typescript doesn't care" // anything I want, typescript will not verify

let unknown: unknown 



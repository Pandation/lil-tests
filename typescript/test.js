var machin = "Coucou"; //type String
var boolean = true; // boolean
var number = 14; //number
var nulberArray = [16, 13, 35]; // array number
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
    Role[Role["ADMIN"] = 5] = "ADMIN"; // donc 5 ici
})(Role || (Role = {}));
if (Role.USER === 0)
    console.log(true);
console.log(Role[5]); // log : ADMIN
var any = "typescript doesn't care"; // anything I want, typescript will not verify
var unknown;

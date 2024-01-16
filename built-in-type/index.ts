// built-in type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Rana";
lastName = " Ahammed";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

const display = (): void => {
	console.log("Hi, I am display");
};

display();

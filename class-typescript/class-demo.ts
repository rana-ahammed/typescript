// class is a template which one we can use multiple times.
class User {
	// properties(Variables), constructor,  methods
	// properties
	userName: string;
	age: number;

	// initialize properties by constructor
	constructor(userName: string, age: number) {
		this.userName = userName;
		this.age = age;
	}

	// method
	display(): void {
		console.log(`username: ${this.userName}, age: ${this.age}`);
	}
}

// class object
// user1 - userName: Rana, age: 25
// user2 - userName: Mehedi, age: 30
let user1 = new User("Rana", 25);
user1.display();

let user2 = new User("Mehedi", 30);
user2.display();

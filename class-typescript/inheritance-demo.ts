class User {
	userName: string;
	age: number;

	constructor(userName: string, age: number) {
		this.userName = userName;
		this.age = age;
	}

	display(): void {
		console.log(`username: ${this.userName}, age: ${this.age}`);
	}
}

class Student extends User {
	studentId: number;

	constructor(userName: string, age: number, studentId: number) {
		super(userName, age);
		this.studentId = studentId;
	}

	display(): void {
		console.log(
			`username: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`
		);
	}
}

let student1 = new Student("Rana", 31, 162);
student1.display();
// let user1 = new User("Rana", 25);
// user1.display();

// let user2 = new User("Mehedi", 30);
// user2.display();

// abstract class
// abstraction helps us to hide the implementation of something
// class declared with abstract keyword
// object can not created from abstract class
// If a class extends abstract class; it must inherit all the abstract method
abstract class User {
	userName: string;
	age: number;

	constructor(userName: string, age: number) {
		this.userName = userName;
		this.age = age;
	}

	// abstract methods will have no body
	// Child class can inherit this method and use it as his wish
	abstract display(): void;
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

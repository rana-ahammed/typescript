// public, private, protected, readonly (these are access modifier)
class User {
	readonly userName: string;
	public age: number;

	constructor(userName: string, age: number) {
		this.userName = userName;
		this.age = age;
	}

	display(): void {
		console.log(`username: ${this.userName}, age: ${this.age}`);
	}
}

class Student extends User {
	private studentId: number;

	constructor(userName: string, age: number, studentId: number) {
		super(userName, age);
		this.studentId = studentId;
	}

	display(): void {
		console.log(
			`username: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`
		);
	}

	setStudentId(id: number): void {
		this.studentId = id;
	}

	getStudentId(): number {
		return this.studentId;
	}
}

// let student1 = new Student("Rana", 31, 162);
// student1.setStudentId(2010305162);
// console.log(student1.getStudentId());

let user1 = new User("Helal", 19);
console.log(user1.userName);
user1.display();

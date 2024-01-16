type User = { userName: string; userId?: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: "rana", userId: 162 };

users.push(user1);
let user2: User;
user2 = { userName: "kamrul", userId: 172 };
users.push(user2);

let user3: User;
user3 = { userName: "rahim", userId: 185 };
users.push(user3);

for (const key in users) {
	// console.log(users[key]["userName"]);
}

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

const requestHandler = (requestType: RequestType) => {
	console.log(requestType);
};

requestHandler("GET");

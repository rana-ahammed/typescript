var users;
users = [];
var user1;
user1 = { userName: "rana", userId: 162 };
users.push(user1);
var user2;
user2 = { userName: "Kamrul", userId: 172 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}

var users;
users = [];
var user1;
user1 = { userName: "rana", userId: 162 };
users.push(user1);
var user2;
user2 = { userName: "kamrul", userId: 172 };
users.push(user2);
var user3;
user3 = { userName: "rahim", userId: 185 };
users.push(user3);
for (var key in users) {
    // console.log(users[key]["userName"]);
}
var getRequest;
getRequest = "GET";
var requestHandler = function (requestType) {
    console.log(requestType);
};
requestHandler("GET");

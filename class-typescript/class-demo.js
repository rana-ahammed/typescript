// class is a template which one we can use multiple times.
var User = /** @class */ (function () {
    // initialize properties by constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // method
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - userName: Rana, age: 25
// user2 - userName: Mehedi, age: 30
var user1 = new User("Rana", 25);
user1.display();
var user2 = new User("Mehedi", 30);
user2.display();

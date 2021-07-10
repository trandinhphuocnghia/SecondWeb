"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercotroller = void 0;
var Usercotroller = /** @class */ (function () {
    function Usercotroller() {
        this.Login;
    }
    // renders login page
    Usercotroller.prototype.Login = function (req, res, next) {
        res.render('C:\\Users\\Mysterious\\SecondWeb\\app\\dist\\views\\login.hbs', { title: "Login" });
    };
    //authenticter ( xác thực người dùng)
    Usercotroller.prototype.Authenticater = function (req, res, next) {
    };
    return Usercotroller;
}());
exports.Usercotroller = Usercotroller;

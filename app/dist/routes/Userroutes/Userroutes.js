"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Usercontrollers_js_1 = require("../../cotrollers/Usercontrollers.js");
var route = express_1.default.Router();
var usercontrollers = new Usercontrollers_js_1.Usercotroller();
//['/Users/login']
route.get('/login', usercontrollers.Login);
//['/Post'] --to login
route.post('login');
module.exports = route;

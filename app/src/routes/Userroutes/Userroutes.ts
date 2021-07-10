import  Express  from "express";
import { Usercotroller } from "../../cotrollers/Usercontrollers.js";


const  route = Express.Router()
const usercontrollers: Usercotroller = new Usercotroller()

//['/Users/login']
route.get('/login',usercontrollers.Login)
//['/Post'] --to login
route.post('login',)   


module.exports = route;
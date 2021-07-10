import {Express,Request,Response} from "express";
const Userroutes = require('./Userroutes/Userroutes')

export function Routes(app:any){
  
   
   
  // ['/']
   app.get('/',(req: Request,res: Response)=>{ res.render("C:\\Users\\\Mysterious\\SecondWeb\\app\\dist\\views\\home.hbs")})

  // ['/Users/login']
   app.use('/Users',Userroutes);

};
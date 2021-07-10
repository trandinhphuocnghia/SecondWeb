import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
import {Request, Response,NextFunction } from "express";

export class Usercotroller{
    constructor(){
        this.Login
    }

    // renders login page
     Login(req: Request,res: Response,next: NextFunction){
     res.render('C:\\Users\\Mysterious\\SecondWeb\\app\\dist\\views\\login.hbs',{title: "Login"})
    }

    //authenticter ( xác thực người dùng)
    Authenticater(req:Request,res:Response,next: NextFunction){
        
    }


}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Userroutes = require('./Userroutes/Userroutes');
function Routes(app) {
    // ['/']
    app.get('/', function (req, res) { res.render("C:\\Users\\\Mysterious\\SecondWeb\\app\\dist\\views\\home.hbs"); });
    // ['/Users/login']
    app.use('/Users', Userroutes);
}
exports.Routes = Routes;
;

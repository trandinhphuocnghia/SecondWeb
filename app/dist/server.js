"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var connectdb = require('./Database/connectdb.js');
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes/routes");
var port = 2021;
var app = express_1.default();
//config run app
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
//config template engines (handlebars)
app.engine('hbs', express_handlebars_1.default({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, 'views'));
//config static file
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//urlencoded the post request
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//database connect
connectdb.connect();
//Routes
routes_1.Routes(app);

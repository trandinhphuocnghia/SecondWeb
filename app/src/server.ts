

import express from 'express'
import exphdb from 'express-handlebars'
const connectdb = require('./Database/connectdb.js') 

import path from 'path'
import  {Routes}  from './routes/routes'
const port = 2021
const app = express()


//config run app
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})

//config template engines (handlebars)
app.engine('hbs',exphdb({
    extname: '.hbs',
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

//config static file
app.use(express.static(path.join(__dirname,'public')))


//urlencoded the post request
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//database connect
connectdb.connect()

//Routes
Routes(app);
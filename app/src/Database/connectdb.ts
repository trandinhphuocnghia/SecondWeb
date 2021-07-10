import mongoose from 'mongoose'
const uri:string = "mongodb://localhost:27017/admin"
export async function connect() {
  try{
    await mongoose.connect(uri),{
        useUnifiedTopology:true,    
        useNewUrlParser:true, 
     
    }
    console.log('connect to db susscessfully')
  }  catch(error){
        console.log('connect failed!!')
  };
  
}
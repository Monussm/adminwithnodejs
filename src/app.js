const express=require('express');
const port=process.env.port ||3000;
const app=express();
const hbs=require('hbs');
const path=require('path');
const mypublic=path.join(__dirname,("../public"));
const mypartials=path.join(__dirname,("../partials"));
app.use(express.static(mypublic));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","hbs");
hbs.registerPartials(mypartials);

// Define Mongoose
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/registration');

}
const registrationSchema = new mongoose.Schema({
    name: String
  });
  const Registration = mongoose.model('Registration', registrationSchema);

app.get("/",(req,res)=>{
console.log("Render here")
res.render('index')
})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")


})


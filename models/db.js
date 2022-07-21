//Retrieve
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/EmployeeDB";

//Connect to the database
mongoose.connect(url, {useNewUrlParser : true}, (err)=>{
    if(!err)
    {
        console.log("We are Connected to MongoDB");
    }
    else
    {
        console.log("Error in DB Connection : " + err);
    }
})


//to include schema
require('./employee.model');
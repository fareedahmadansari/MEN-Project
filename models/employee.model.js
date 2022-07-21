const mongoose = require("mongoose");

//specify the employee document schema

var employeeSchema = new mongoose.Schema(
    {
fullname : { type : String,
    required: 'This field is required.'},
email  : {type: String},
mobile : {type : String},
city : {type : String}
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//To register employeeSchema in mongoose, we call this : mongoose.model(schemaname, schenmaobjec)
mongoose.model("Employee", employeeSchema);
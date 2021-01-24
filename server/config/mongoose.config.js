const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productsdb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("Successfully connected to database!"))
.catch(err=>console.log("Something went wrong.", err))
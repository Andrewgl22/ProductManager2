const cors = require('cors');
const express = require('express');
const app = express();

require("./config/mongoose.config");
const Routes = require("./routes/products.routes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

Routes(app)

app.listen(8000,()=>console.log("Listening on port 8000!"))

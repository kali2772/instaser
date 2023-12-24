const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("./keys");
// yzz2TLdLWn85iQE

mongoose.connect(
  MONGOURI /* ,{
    useNewUrlParser:true,
    useUnifiedTopology: true
} */
);

mongoose.connection.on("connected", () => console.log("ohhh yehhh"));
mongoose.connection.on("error", (err) => console.log("err connecting", err));

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));



app.listen(PORT, () => console.log("server is running on", PORT));
/* // bottom code (middleware) is likly to use authenticate your app
    const custommiddleware = (req,res,next)=>{
        console.log("middle finger is here")
        next()
    }
    
    // app.use(custommiddleware)        this for all route
    
    app.get('/',(req,res)=>{
        res.send("hello")
    })
    app.get('/about',custommiddleware,(req,res)=>{
        res.send("about")
    })
    app.get('/portfolio',(req,res)=>{
        res.send("portfolio")
    }) */

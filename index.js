const express = require("express");
const dbconfig = require("./config/db");
const routes = require("../Routes/user.routes");
const passport = require("passport");
const session = require("express-session");
const LocalAuth = require("./middleware/local-passport");
const app = express();
app.use(session({secret:"secret"}));
LocalAuth(passport)
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to the blog");
})
app.use("/user",routes);
app.listen(4040,()=>{
    console.log("listening on port 4040");
    dbconfig();
})
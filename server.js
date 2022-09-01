const  express = require("express")
//npm i cookie-parser
const cookieParser = require("cookie-parser");

var jwt = require("jsonwebtoken");
const secretKey = "esjtkl45758resghkls"

const app = express();

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const reviewRouter = require("./routes/reviewRoutes")
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public/build"))
//signup input:
//name,
//password
//confirm password
//address
//email
//phone
//pic

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);
app.use("/api/v1/review",reviewRouter)

const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("server started at 3000");
})
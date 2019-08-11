const express=require('express');
const userRouter=require('./routers/user.js');
const bodyParser=require('body-parser');
const cors=require("cors");
var app=express();
app.listen(3000);

app.use(cors({
	origin:"http://127.0.0.1:5500"
}));
app.use( express.static('public') );
app.use( bodyParser.urlencoded({
    extended:false
}) );


app.use('/user',userRouter);



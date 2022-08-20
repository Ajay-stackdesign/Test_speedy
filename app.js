var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const database = require("./config/database")
// var indexRouter = require('./routes/index');
// var recipeRouter = require('./routes/recipes');
// const dotenv = require("dotenv")
// dotenv.config({ path: "node-basic-2/config/.env" })

var app = express();
const PORT = 5000



database()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})
// view engine setup
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
const recipeRouter = require("./routes/recipes")
// app.use('/', indexRouter);
app.use("/api/v1", recipeRouter);


app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})

// module.exports = app;

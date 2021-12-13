const express = require ("express");

const app = express();

const {register,login} = require("./controllers/user.controllers");

const movieController = require("./controllers/movie.controllers");

const theatreController = require("./controllers/theatre.controllers");

const showController = require("./controllers/show.controllers");
const seatController = require("./controllers/seat.controllers");
const screenController = require("./controllers/screen.controllers");
app.use(express.json());

app.post("/register",register);
app.post("/login",login);

app.use("/post/movies",movieController);
app.use("/get/movies",movieController);

app.use("/post/shows",showController);
app.use("/get/shows",showController);

app.use("/post/theatres",theatreController);
app.use("/get/theatres",theatreController);

app.use("/post/seats",seatController);
app.use("/get/seats",seatController);

app.use("/post/screens",screenController);
app.use("/get/screens",screenController);





module.exports= app;
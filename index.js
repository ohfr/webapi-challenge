/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, just API

Go code!
*/
const express = require("express");

const projectRouter = require("./Routes/Projects");

const actionRouter = require("./Routes/Actions");

const server = express();

const PORT = process.env.PORT || 8080;

server.use(express.json());

server.use("/projects", projectRouter);

server.use("/actions", actionRouter);

server.use((req,res) => {
    res.status(404).json({message: "Page Not Found"})
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: "An Internal Error Occurred"})
});

server.listen(PORT, () => {
    console.log(`\n *** Server up on port ${PORT} *** \n`)
});


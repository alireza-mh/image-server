const express = require("express");
const fs = require("fs");
const stream = require("stream");
const gm = require("gm");
const sharp = require('sharp');

const app = express();

const PORT = 5000; // default port to listen

const convert2Webp = (gm) => {
  return gm.stream("webp");
};

app.get("/images/*", (req: Request, res: Response, next) => {
    let gmResult =sharp(__dirname + req.url).resize(600,120, {fit: "inside"});

    gmResult.toFile(__dirname + '/images/output.webp', (err, info) => {
        console.log(err);
    });
});

// start the express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

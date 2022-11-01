// Notes.
// Use standardjs style: https://standardjs.com/

const Express = require("express");
const Seneca = require("seneca");

const app = Express();

// TODO:
// 1. extend to support red, green, blue - generate PR

app.use("/color/:name", function (req, res) {
  let name = req.params.name;
  console.log("NAME", name);

  let code = "#CCCCCC";

  if('red' === name) {
    code = '#ff0000'
  } else if('green' === name) {
    code = '#00ff00'
  } else if('blue' === name) {
    code = '#0000ff'
  }

  //Using switch statement.
  // switch (name) {
  //   case "red":
  //     code = "#ff0000";
  //     break;
  //   case "green":
  //     code = "#00ff00";
  //     break;
  //   case "blue":
  //     code = "#0000ff";
  //     break;
  //   default:
  //     break;
  // }
  res.send(code);
});

app.listen(3000);

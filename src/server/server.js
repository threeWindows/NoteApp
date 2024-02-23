const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { log } = require("console");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  log("dziala");
});
app.post("/data", (req, res) => {
  console.log(req.body);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "noteapp"
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  const wartosci = Object.values(req.body);
  con.query("Insert into vlues values(null, ?)", [wartosci], (err, ok) => {
    if (err) {
      log(err);
      throw err;
    }
    res.json({ mes: "JE GIT" });
  });
});
app.get("/getdata", (req, res) => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "noteapp"
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  con.query("SELECT * from vlues", (err, ok, response) => {
    if (err) {
      log(err);
      throw err;
    }
    res.json(ok);
  });
});

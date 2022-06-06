const express = require("express");

const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

const app = express();
const data = path.join(__dirname, "db.json");
app.use(express.json());

app.post("/user/create", async (req, res) => {
  let obj;
  if (res.body.role == "voter") {
    obj = {
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      party: req.body.party,
      username: res.body.username,
      password: res.body.password,
    };
  } else {
    obj = {
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      party: req.body.party,
      votes: req.body.votes,
    };
  }
  fs.appendFile("db.json", stringify(obj), function (err) {
    if (err) throw err;
    console.log("IS WRITTEN");
  });
  return res.status(201).send({ status: "user created", id: "26456ffff" });
});
app.get("/", () => {
  return res.status(200).send("naruto");
});
app.listen(process.env.PORT || 8080, () => {
  console.log("server is running http://localhost:8080/");
});
app.post("/user/login", async (req, res) => {
  return res
    .status(201)
    .send({ status: "Login Successful", token: "428fIyrd" });
});

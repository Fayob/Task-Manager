const express = require("express");
const route = express.Router();

const {
  getPerson,
  postPerson,
  postPostmanPerson,
  putPerson,
  deletePerson,
} = require("./controller");

route.get("/", getPerson);

route.post("/", postPerson);

route.post("/postman", postPostmanPerson);

route.put("/:id", putPerson);

route.delete("/postman/:id", deletePerson);

// another method is as follows
// variable.route
// route.route("/").get(getPerson).post(postPerson);
// route.route("/postman").post(postPostmanPerson);
// route.route("/:id").put(putPerson);
// route.route("/postman/:id").delete(deletePerson);

module.exports = route;

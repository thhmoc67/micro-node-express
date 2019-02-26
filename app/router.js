var indexRouter = require("./controllers");
var usersRouter = require("./controllers/users");

const router = app => {
  app.use("/", indexRouter);
  app.use("/users", usersRouter);
};

module.exports = router

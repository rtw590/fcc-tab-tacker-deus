const AuthenticationController = require("./controllers/AuthenticationController");

const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

const SongsController = require("./controllers/SongsController");

module.exports = app => {
  app.post(
    "/register",
    // Route will hit the policy first and do validation, then move onto actually registering
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  // We use controllers to keep the logic out of the routes and to keep it clean here
  app.post("/login", AuthenticationController.login);
  app.get("/songs", SongsController.index);
  app.get("/songs/:songId", SongsController.show);
  app.put("/songs/:songId", SongsController.put);
  app.post("/songs", SongsController.post);
};

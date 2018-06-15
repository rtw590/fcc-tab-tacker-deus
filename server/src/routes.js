const AuthenticationController = require("./controllers/AuthenticationController");

const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = app => {
  app.post(
    "/register",
    // Route will hit the policy first and do validation, then move onto actually registering
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
};

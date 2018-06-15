// We are using Joi for validation rules
const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    const { error, value } = Joi.validate(req.body, schema);

    // If error, find which part of validation failed
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;
        case "password":
          res.status(400).send({
            error: "Your password must be between 8 and 32 characters"
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information"
          });
          break;
      }
    } else {
      next();
    }
  }
};

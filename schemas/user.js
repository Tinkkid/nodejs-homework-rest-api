const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = { registerSchema, loginSchema };

// add.patter(emailRegexp) to joi;

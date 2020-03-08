const Joi = require('joi');

const create = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .regex(/[a-zA-Z].*/)
    .min(6)
    .max(100)
    .required(),
});

module.exports = create;

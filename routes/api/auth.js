const express = require("express");

const schemas = require("../../schemas/user");
const { validateBody } = require("../../middlewares");

const { auth: ctrl } = require("../../controllers/");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;

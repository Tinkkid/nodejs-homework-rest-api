const express = require("express");

const { auth } = require("../../controllers");

const { register, login } = auth;

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/login", validateBody(schemas.loginSchema), login);

module.exports = router;

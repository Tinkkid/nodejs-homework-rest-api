const express = require("express");

const { auth } = require("../../controllers");

const { register, login, getCurrentUser, logout, updateSubscription, updateAvatar, verifyEmail, resendVerifyEmail } = auth;

const { validateBody, authenticate , upload} = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/verify/:verificationCode", verifyEmail);

router.post("/verify",validateBody(schemas.emailSchema), resendVerifyEmail )

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrentUser);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;

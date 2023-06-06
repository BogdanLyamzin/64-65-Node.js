const express = require("express");

const authControllers = require("../../controllers/auth-controllers");

const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const {validateBody} = require("../../utils");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.userRegisterSchema), authControllers.register);

router.get("/verify/:verificationCode", authControllers.verify);

router.post("/verify", validateBody(schemas.userEmailSchema), authControllers.resendVerifyEmail)

// signin
router.post("/login", validateBody(schemas.userLoginSchema), authControllers.login);

router.get("/current", authenticate, authControllers.getCurrent);

router.post("/logout", authenticate, authControllers.logout);

module.exports = router;
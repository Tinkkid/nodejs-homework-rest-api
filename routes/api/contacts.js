const express = require("express");

// const schemas = require("../../schemas/contact");
// const { validateBody } = require("../../middlewares");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;

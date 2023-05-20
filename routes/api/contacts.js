const express = require("express");

const schemas = require("../../schemas/contact");
const { validateBody, isValidId } = require("../../middlewares");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

// router.delete("/:contactId", isValidId,ctrl.deleteContact);

// router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;

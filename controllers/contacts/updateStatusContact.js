const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers/HttpError");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact updated",
    data: {
      result,
    },
  });
};

module.exports = updateStatusContact;

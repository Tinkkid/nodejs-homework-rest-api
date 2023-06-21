const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const verifyEmail = async (req, res) => {
   const { verificationCode } = req.params;
   const user = await User.findOne({ verificationCode })
   if (!user) {
       throw HttpError(401, "Email is not found");
   }
   await User.findByIdAndUpdate(user._id, {verify:true, verificationCode: ""})
}

module.exports = verifyEmail;
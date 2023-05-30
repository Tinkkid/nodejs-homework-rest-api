const User = require("../../models/user");
const { HttpError } = require("../../helpers/HttpError");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, hashPassword });
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  res.status(201).json({
    status: "success",
    code: 201,
    message: "new user added",
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;

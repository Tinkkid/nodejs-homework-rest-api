const User = require("../../models/user");

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    message: "new user added",
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;

const Userschema = require("../Model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const object = {
  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const payload = req.body;
      const existingUser = await Userschema.findOne({ email });

      if (existingUser) {
        res.status(400).json({ message: "email is aleady in use" });
      } else {
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await Userschema({
          username,
          email,
          password: hashPassword,
        });
        newUser.save();

        const time = 3 * 24 * 60 * 60;
        const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
          expiresIn: time,
        });
        res.status(200).json({ message: "signup success", token });
      }
    } catch (error) {
      console.error(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const payload = req.body;

      const existingUser = await Userschema.find({ email });
      if (!existingUser) {
        return res
          .status(400)
          .json({ message: `user not found with email ${email}` });
      }

      const passChek = bcrypt.compareSync(password, existingUser[0].password);
      if (!passChek) {
        return res.status(400).json({ message: "password not match" });
      }

      const time = 3 * 24 * 60 * 60;
      const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
        expiresIn: time,
      });
      return res.status(200).json({ message: "Login Success", token });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = object;

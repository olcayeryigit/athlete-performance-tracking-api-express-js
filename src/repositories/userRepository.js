const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserRepository {
  async create(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({ ...data, password: hashedPassword });
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async findAll() {
    return await User.findAll();
  }

  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

module.exports = new UserRepository();

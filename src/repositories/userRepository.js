const User = require("../models/User");

class UserRepository {
  async findById(id) {
    return await User.findByPk(id);
  }

  async findAll() {
    return await User.findAll();
  }
}

module.exports = new UserRepository();

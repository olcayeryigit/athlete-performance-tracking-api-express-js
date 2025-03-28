const { TrainingProgram, Workout } = require("../models");

class TrainingProgramRepository {
  async create(data) {
    return await TrainingProgram.create(data);
  }

  async findAllByCoach(coachId) {
    return await TrainingProgram.findAll({
      where: { coach_id: coachId },
      include: [Workout],
    });
  }

  async findById(id) {
    return await TrainingProgram.findByPk(id, { include: [Workout] });
  }

  async update(id, data) {
    const program = await TrainingProgram.findByPk(id);
    if (!program) return null;
    await program.update(data);
    return program;
  }

  async delete(id) {
    const program = await TrainingProgram.findByPk(id);
    if (!program) return null;
    await program.destroy();
    return true;
  }
}

module.exports = new TrainingProgramRepository();

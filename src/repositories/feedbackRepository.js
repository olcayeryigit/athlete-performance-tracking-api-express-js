const { Feedback } = require("../models");

class FeedbackRepository {
  async create(data) {
    return await Feedback.create(data);
  }

  async findAllByCoach(coachId) {
    return await Feedback.findAll({
      include: [
        {
          model: require("../models/TrainingProgram"),
          where: { coach_id: coachId },
        },
      ],
    });
  }

  async findById(id) {
    return await Feedback.findByPk(id, {
      include: [{ model: require("../models/TrainingProgram") }],
    });
  }

  async update(id, data) {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) return null;
    await feedback.update(data);
    return feedback;
  }
}

module.exports = new FeedbackRepository();

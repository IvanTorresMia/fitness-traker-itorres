let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type",
      },
      name: {
        type: String,
        required: "Enter a name",
      },
      duration: {
        type: String,
        required: "Enter a duration",
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;

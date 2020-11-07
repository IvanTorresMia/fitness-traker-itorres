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

} ,
{
    toJSON: {
      virtuals: true
    }
  } 

);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function (total, exercise) {
        return total + exercise.duration;
      }, 0);
  });

const Workout = mongoose.model("workout", workoutSchema);


module.exports = Workout;


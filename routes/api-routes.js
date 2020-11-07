const router = require("express").Router();
const { mongo } = require("mongoose");
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbworkouts) => {
      res.json(dbworkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {

    Workout.findByIdAndUpdate( params.id, {$push: {exercises: body}})
       .then(function(data) {
           res.send(data)
       })
        
});


router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbworkouts) => {
        console.log(dbworkouts);
      res.json(dbworkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .sort({ day: 1 })
    .then((dbworkouts) => {
      res.json(dbworkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

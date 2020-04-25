const express = require("express");
const {
  getNgos,
  getNgo,
  createNgo,
  updateNgo,
  deleteNgo,
  // getNgosInRadius,
  ngosPhotoUpload,
} = require("../controllers/Ngo");

const Ngo = require("../models/Ngo");

// Include other resource routers
// const OrphansRouter = require("./Orphans");
const reviewRouter = require("./Reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
// router.use("/orphans", OrphansRouter);
router.use("/:ngoId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getNgosInRadius);

router
  .route("/:ngoId/photo")
  .put(protect, authorize("ngo", "admin"), ngosPhotoUpload);

router
  .route("/")
  .get(advancedResults(Ngo, "Orphans"), getNgos)
  .post(protect, authorize("ngo", "admin"), createNgo);

router
  .route("/:ngoId")
  .get(getNgo)
  .put(protect, authorize("ngo", "admin"), updateNgo)
  .delete(protect, authorize("ngo", "admin"), deleteNgo);

module.exports = router;

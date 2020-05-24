const express = require("express");
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/Reviews");

const Review = require("../models/Reviews");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");


router
  .route("/")
  .get(advancedResults(Review), getReviews)
  .post(addReview);

// router
//   .route("/")
//   .get(
//     advancedResults(Reviews, {
//       path: "orphan",
//       select: "title description",
//     }),
//     getReviews
//   )
//   .post(protect, authorize("user", "admin"), addReview);


router
  .route("/:id")
  // .get(getReview)
  // .put(protect, updateReview)
  .delete(protect, deleteReview);


module.exports = router;

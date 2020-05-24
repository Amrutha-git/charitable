const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Review = require("../models/Reviews");
// const Donars = require("../models/Donars");

// @desc      Get reviews
// @route     GET /api/v1/reviews
// @route     GET /api/v1/ngos/:ngoId/reviews
// @access    Donars
exports.getReviews = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
// exports.getReviews = asyncHandler(async (req, res, next) => {
//   if (req.params.ngoId) {
//     const reviews = await Review.find({ ngo: req.params.ngoId });

//     return res.status(200).json({
//       success: true,
//       count: reviews.length,
//       data: reviews,
//     });
//   } else {
//     res.status(200).json(res.advancedResults);
//   }
// });

// @desc      Get single review
// @route     GET /api/v1/reviews
// @route     GET /api/v1/ngos/:ngoId/reviews/:id
// @access    Donars
// exports.getReview = asyncHandler(async (req, res, next) => {
//   const review = await Review.findById(req.params.ngoId).populate({
//     path: "ngo",
//     select: "name ",
//   });

//   if (!review) {
//     return next(
//       new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
//     );
//   }

//   res.status(200).json({
//     success: true,
//     data: review,
//   });
// });

// // @desc      Add review
// // @route     POST /api/v1/public/:publicId/reviews
// // @access    Private
exports.addReview = asyncHandler(async (req, res, next) => {
  // req.body.product = req.params.productId;
  // req.body.user = req.user.id;

  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review,
  });
});
// exports.addReview = asyncHandler(async (req, res, next) => {
//   req.body.ngo = req.params.ngoId;
//   req.body.user = req.user.id;

//   const review = await Review.create(req.body);

//   res.status(201).json({
//     success: true,
//     data: review,
//   });
// });

// // @desc      Update review
// // @route     PUT /api/v1/reviews/:id
// // @access    Private
exports.updateReview = asyncHandler(async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure review belongs to user or user is admin
  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse(`Not authorized to update review`, 401));
  }

  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: review,
  });
});

// exports.updateReview = asyncHandler(async (req, res, next) => {
//   let review = await Review.findById(req.params.id);

//   if (!review) {
//     return next(
//       new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
//     );
//   }

//   // Make sure review belongs to user or user is admin
//   if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(new ErrorResponse(`Not authorized to update review`, 401));
//   }

//   review = await Review.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     success: true,
//     data: review,
//   });
// });

// // @desc      Delete review
// // @route     DELETE /api/v1/reviews/:id
// // @access    Private
exports.deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure review belongs to user or user is admin
  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse(`Not authorized to update review`, 401));
  }

  await review.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
// exports.deleteReview = asyncHandler(async (req, res, next) => {
//   const review = await Review.findById(req.params.id);

//   if (!review) {
//     return next(
//       new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
//     );
//   }

//   // Make sure review belongs to user or user is admin
//   if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(new ErrorResponse(`Not authorized to update review`, 401));
//   }

//   await review.remove();

//   res.status(200).json({
//     success: true,
//     data: {},
//   });
// });

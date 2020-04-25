const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Ngo = require("../models/Ngo");

// @desc      Get all ngos
// @route     GET /api/v1/ngos
// @access    Public
exports.getNgos = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single ngo
// @route     GET /api/v1/ngos/:ngoId
// @access    Public
exports.getNgo = asyncHandler(async (req, res, next) => {
  const ngo = await Ngo.findById(req.params.ngoId);

  if (!ngo) {
    return next(
      new ErrorResponse(
        `Ngo not found with id of ${req.params.ngoId}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: ngo });
});

// @desc      Create new ngo
// @route     POST /api/v1/ngos
// @access    Private
exports.createNgo = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published ngo
  const publishedngo = await Ngo.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one ngo
  if (publishedngo && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already  a ngo`,
        400
      )
    );
  }

  const ngo = await Ngo.create(req.body);

  res.status(201).json({
    success: true,
    data: ngo,
  });
});

// @desc      Update ngo
// @route     PUT /api/v1/ngo/:ngoId
// @access    Private
exports.updateNgo = asyncHandler(async (req, res, next) => {
  let ngo = await Ngo.findById(req.params.ngoId);

  if (!ngo) {
    return next(
      new ErrorResponse(
        `Ngo not found with id of ${req.params.ngoId}`,
        404
      )
    );
  }

  // Make sure user is ngo owner
  if (ngo.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.ngoId} is not authorized to update this ngo`,
        401
      )
    );
  }

  ngo = await Ngo.findByIdAndUpdate(req.params.ngoId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: ngo });
});

// @desc      Delete ngo
// @route     DELETE /api/v1/ngo/:ngoId
// @access    Private
exports.deleteNgo = asyncHandler(async (req, res, next) => {
  const ngo = await Ngo.findById(req.params.ngoId);

  if (!ngo) {
    return next(
      new ErrorResponse(
        `Ngo not found with id of ${req.params.ngoId}`,
        404
      )
    );
  }

  // Make sure user is ngo owner
  if (ngo.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.ngoId} is not authorized to delete this ngo`,
        401
      )
    );
  }

  ngo.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for ngo
// @route     PUT /api/v1/ngo/:ngoId/photo
// @access    Private
exports.ngosPhotoUpload = asyncHandler(async (req, res, next) => {
  const ngo = await Ngo.findById(req.params.ngoId);

  if (!ngo) {
    return next(
      new ErrorResponse(
        `Ngo not found with id of ${req.params.ngoId}`,
        404
      )
    );
  }

  // Make sure user is ngo owner
  if (ngo.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.ngoId} is not authorized to update this bootcamp`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  file.name = `photo_${ngo._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Ngo.findByIdAndUpdate(req.params.ngoId, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});

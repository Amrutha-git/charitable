const express = require("express");

const router = express.Router();

const { check, validationResult } = require("express-validator");
const {
  getCategories,
  addCategory,
  deleteCategory,
  getCategoryNgo,
  updateCategory,
} = require("../controllers/category");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const Category = require("../models/Category");

router
  .route("/")
  .get(
    advancedResults(Category, {
      path: "ngo",
      select: "name",
    }),
    getCategories
  )
  .post(protect, authorize("admin"), addCategory);

router
  .route("/:categoryId")
  .get(getCategoryNgo)
  .put(protect, authorize("admin"), updateCategory)
  .delete(protect, authorize("admin"), deleteCategory);

router.route("/:categoryId/ngo").get(getCategoryNgo);

module.exports = router;

import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController.js";

router.post("/create", categoryController.createCategory);
router.get("/:slug", categoryController.getCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
router.get("/", categoryController.getCategoryList);

export default router;

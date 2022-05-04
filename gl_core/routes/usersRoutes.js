import express from "express";
import {register,login,profile,confirm,resetPassword,comToken,newPassword} from "../controllers/controllerUsers.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();
//Public routes
router.post("/",register);
router.post("/login",login);
router.get("/confirm/:token",confirm);
router.post("/reset-password",resetPassword);
router.get("/reset-password/:token",comToken);
router.post("/reset-password/:token",newPassword);

// Private routes
router.get("/profile",checkAuth,profile,comToken,newPassword);

export default router;

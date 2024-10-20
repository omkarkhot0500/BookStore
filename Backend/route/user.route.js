import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);           // When a POST request is made to the /signup endpoint, the signup function will be executed
router.post("/login", login);

export default router;
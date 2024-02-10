import express from "express";
import { test } from "../controller/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.post('/signout', signout);
export default router;

import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const golbalRouter = express.Router();

golbalRouter.get("/", trending);
golbalRouter.get("/join", join);

export default golbalRouter;

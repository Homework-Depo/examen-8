import { Router } from "express";
import * as Controller from "./controller";

const songRouter = Router();

songRouter.route("/").post(Controller.create);
songRouter.route("/").get(Controller.findAll);
songRouter.route("/:id").get(Controller.findById);

export default songRouter;


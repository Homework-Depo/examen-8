import { Router } from "express";
import * as Controller from "./controller";

const playlistRouter = Router();

playlistRouter.route("/").post(Controller.create);
playlistRouter.route("/").get(Controller.findAll);
playlistRouter.route("/:id").get(Controller.findById);

export default playlistRouter;


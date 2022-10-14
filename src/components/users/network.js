import { Router } from "express";
import * as Controller from "./controller";

const usersRouter = Router();

usersRouter.route("/").get(Controller.findAll);
usersRouter.route("/").post(Controller.create);

export default usersRouter;
import { Router } from "express";
import * as Controller from "./controller";

const loginRouter = Router();

loginRouter.route("/").post(Controller.login);

export default loginRouter;
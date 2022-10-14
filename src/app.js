import express from "express";
import { routes } from "./router";

export const app = express();

app.use(express.json());
routes(app);
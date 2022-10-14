import { UsersRouter } from "../components";

const listRoutes = [["/users", UsersRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
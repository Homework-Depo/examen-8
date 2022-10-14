import { UsersRouter, LoginRouter } from "../components";

const listRoutes = [["/v1/users", UsersRouter], ["/v1/login", LoginRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
import { UsersRouter, LoginRouter, SongRouter } from "../components";

const listRoutes = [
  ["/v1/users", UsersRouter],
  ["/v1/login", LoginRouter],
  ["/v1/songs", SongRouter]  
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
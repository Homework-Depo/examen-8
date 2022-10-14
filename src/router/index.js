import { UsersRouter, LoginRouter, SongRouter, PlaylistRouter } from "../components";

const listRoutes = [
  ["/v1/users", UsersRouter],
  ["/v1/login", LoginRouter],
  ["/v1/songs", SongRouter],
  ["/v1/playlists", PlaylistRouter]  
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
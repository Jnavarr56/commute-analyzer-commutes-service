import cors from "cors";
import morgan from "morgan";
import express from "express";
import routes from "routes";

import { IN_DEVELOPMENT, AUTHENTICATION_HEADER_NAME } from "config/vars";

const PORT = process.env.PORT || 8080;

const app = express();

const corsMiddleware = cors();
const loggingMiddleware = morgan(IN_DEVELOPMENT ? "dev" : "combined");
const authenticationMiddleware = (req, res, next) => {
  const authenticatedUserId = req.headers[AUTHENTICATION_HEADER_NAME];
  if (!authenticatedUserId) {
    res.sendStatus(401);
  } else {
    req.authenticatedUserId = authenticatedUserId;
    next();
  }
};

app.use(corsMiddleware);
app.use(loggingMiddleware);
app.use(authenticationMiddleware);

app.use(routes);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
});

export default server;

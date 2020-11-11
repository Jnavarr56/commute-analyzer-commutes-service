import cors from "cors";
import morgan from "morgan";
import express from "express";
import routes from "routes";

import { IN_DEVELOPMENT } from "config/vars";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors);
app.use(morgan(IN_DEVELOPMENT ? "dev" : "combined"));

app.use(routes);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
});

export default server;

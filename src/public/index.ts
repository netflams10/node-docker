import dotenv from "dotenv";
import "express-async-errors";
import "module-alias/register";
import express, { Express } from "express";

dotenv.config();

import app from "@config/app";
import route from "@router/api";
import error from "@app/Handlers/ErrorHandler";
import { exception } from "@config/winston";

const server: Express = express();
const port: string = process.env.PORT || "8080";

if (!app.APP_KEY) {
  throw new Error("Please set an App Key.");
}

server.use("/api", route);

exception;

server.use(error);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

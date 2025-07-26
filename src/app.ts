import cors from "cors";
import express, { json } from "express";
import { router } from "./routes";

export default function createApp() {
  const app = express();

  app.use(cors());
  app.use(json());
  app.use("/api", router);

  return app;
}

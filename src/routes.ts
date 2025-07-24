import { Router } from "express";
import { getListPlayer } from "./controllers/players-controller";

export const router = Router();

router.get("/players", getListPlayer);

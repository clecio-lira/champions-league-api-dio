import { Router } from "express";
import {
  deletePlayerById,
  getListPlayer,
  getPlayerById,
  postPlayer,
  updatePlayerById,
} from "./controllers/players-controller";

export const router = Router();

router.get("/players", getListPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayerById);

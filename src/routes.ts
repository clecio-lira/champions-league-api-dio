import { Router } from "express";
import {
  deletePlayerById,
  getListPlayer,
  getPlayerById,
  postPlayer,
  updatePlayerById,
} from "./controllers/players-controller";
import {
  getClubById,
  getListClubs,
  postClub,
} from "./controllers/clubs-controller";
import { deleteClub } from "./repositories/club-repository";

export const router = Router();

router.get("/players", getListPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayerById);

router.get("/clubs", getListClubs);
router.get("/clubs/:id", getClubById);
router.post("/clubs", postClub);
router.delete("/clubs/:id", deleteClub);

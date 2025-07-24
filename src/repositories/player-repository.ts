import { PlayerModel } from "../models/player-model";

const db: PlayerModel[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Ronaldo" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return db;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return db.find((player) => player.id === id);
};

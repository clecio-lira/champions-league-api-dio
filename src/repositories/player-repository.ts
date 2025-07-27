import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from "fs/promises";

async function db() {
  const data = await fs.readFile("./src/data/players.json", "utf-8");
  return JSON.parse(data) as PlayerModel[];
}

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const players = await db();
  return players;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  const players = await db();
  return players.find((player) => player.id === id);
};

export const createPlayer = async (body: PlayerModel) => {
  const players = await db();
  const newPlayer = { ...body, id: players.length + 1 };
  players.push(newPlayer);

  await fs.writeFile(
    "./src/data/players.json",
    JSON.stringify(players, null, 2)
  );

  return newPlayer;
};

export const updatePlayer = async (
  id: number,
  body: StatisticsModel
): Promise<PlayerModel> => {
  const players = await db();
  const index = players.findIndex((player) => player.id === id);

  if (index !== -1) {
    players[index].statistics = body;
    await fs.writeFile(
      "./src/data/players.json",
      JSON.stringify(players, null, 2)
    );
    return players[index];
  }

  return {} as PlayerModel;
};

export const deletePlayer = async (id: number) => {
  const players = await db();
  const index = players.findIndex((player) => player.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    await fs.writeFile(
      "./src/data/players.json",
      JSON.stringify(players, null, 2)
    );
    return true;
  }

  return false;
};

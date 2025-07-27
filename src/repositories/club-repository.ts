import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

async function db() {
  const data = await fs.readFile("src/data/clubs.json", "utf-8");
  return JSON.parse(data) as ClubModel[];
}

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const clubs = await db();
  return clubs;
};

export const findClubById = async (
  id: number
): Promise<ClubModel | undefined> => {
  const clubs = await db();
  return clubs.find((club) => club.id === id);
};

export const createClub = async (body: ClubModel) => {
  const clubs = await db();
  const newClub = { ...body, id: clubs.length + 1 };
  clubs.push(newClub);

  await fs.writeFile("src/data/clubs.json", JSON.stringify(clubs, null, 2));

  return newClub;
};

export const deleteClub = async (id: number) => {
  const clubs = await db();
  const index = clubs.findIndex((club) => club.id === id);

  if (index !== -1) {
    clubs.splice(index, 1);
    await fs.writeFile("src/data/clubs.json", JSON.stringify(clubs, null, 2));
    return true;
  }

  return false;
};

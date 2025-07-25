import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import {
  createPlayer,
  deletePlayer,
  findAllPlayers,
  findPlayerById,
  updatePlayer,
} from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getListPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const postPlayerService = async (body: PlayerModel) => {
  let response = null;

  if (Object.keys(body).length !== 0) {
    await createPlayer(body);

    response = await created();
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerByIdService = async (
  id: number,
  body: StatisticsModel
) => {
  let response = null;

  const data = await updatePlayer(id, body);

  response = ok(data);

  return response;
};

export const deletePlayerByIdService = async (id: number) => {
  let response = null;
  await deletePlayer(id);

  response = ok({ message: "Deleted" });

  return response;
};

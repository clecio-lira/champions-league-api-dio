import { Request, Response } from "express";
import {
  deletePlayerByIdService,
  getListPlayerService,
  getPlayerByIdService,
  postPlayerService,
  updatePlayerByIdService,
} from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getListPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getListPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const httpResponse = await getPlayerByIdService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const body = req.body;
  const httpResponse = await postPlayerService(body);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const updatePlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body: StatisticsModel = req.body;
  const httpResponse = await updatePlayerByIdService(parseInt(id), body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const httpResponse = await deletePlayerByIdService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

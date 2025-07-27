import { Request, Response } from "express";
import {
  deleteClubByIdService,
  getClubByIdService,
  getListClubService,
  postClubService,
} from "../services/clubs-service";

export const getListClubs = async (req: Request, res: Response) => {
  const httpResponse = await getListClubService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const httpResponse = await getClubByIdService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postClub = async (req: Request, res: Response) => {
  const body = req.body;
  const httpResponse = await postClubService(body);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deleteClub = async (req: Request, res: Response) => {
  const { id } = req.params;
  const httpResponse = await deleteClubByIdService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

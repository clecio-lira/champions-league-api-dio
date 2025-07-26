import { Request, Response } from "express";
import { getListClubService } from "../services/clubs-service";

export const getListClubs = async (req: Request, res: Response) => {
  const response = await getListClubService();

  res.status(response.statusCode).json(response.body);
};

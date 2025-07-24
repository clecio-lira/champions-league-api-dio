import { Request, Response } from "express";
import { getListPlayerService } from "../services/players-service";

export const getListPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getListPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

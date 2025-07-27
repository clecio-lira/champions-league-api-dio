import { ClubModel } from "../models/club-model";
import {
  createClub,
  deleteClub,
  findAllClubs,
  findClubById,
} from "../repositories/club-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getListClubService = async () => {
  const data = await findAllClubs();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getClubByIdService = async (id: number) => {
  const data = await findClubById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const postClubService = async (body: ClubModel) => {
  let response = null;

  if (Object.keys(body).length !== 0) {
    await createClub(body);

    response = await created();
  } else {
    response = await badRequest();
  }

  return response;
};

export const deleteClubByIdService = async (id: number) => {
  let response = null;

  const isDeleted = await deleteClub(id);

  if (isDeleted) {
    response = ok({ message: "Deleted" });
  } else {
    response = await badRequest();
  }

  return response;
};

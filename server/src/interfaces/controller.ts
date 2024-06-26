import { NextFunction, Request, Response } from "express";

export interface IController {
  create: ControllerFunction;
  getAll: ControllerFunction;
  getById: ControllerFunction;
  delete: ControllerFunction;
  update: ControllerFunction;
}

type ControllerFunction = (
  req: Request<any, any, any, any>,
  res: Response,
  next: NextFunction
) => Promise<void>;

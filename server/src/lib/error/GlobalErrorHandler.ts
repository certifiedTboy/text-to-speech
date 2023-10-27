import { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode: number = err.statusCode;
  const message: string = err.message;
  const metaData: object = err.metaData || {};

  res.status(statusCode).json({ message, ...metaData });
};

export default GlobalErrorHandler;

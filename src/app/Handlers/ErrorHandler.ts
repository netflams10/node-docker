import { ErrorRequestHandler, Response, Request, NextFunction } from "express";
import { logger } from "@config/winston";

export default function (
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  _next: NextFunction
) {
  logger.warn({ error, request, response });

  response.status(500).json("Error Happened");
}

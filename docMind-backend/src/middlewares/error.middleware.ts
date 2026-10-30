import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { ApiError } from "../utils/ApiError";
import { MAX_PDF_SIZE_MB } from "../constants";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message || "Internal Server Error";
  let errors: unknown[] = [];

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    errors = err.errors;
  } else if (err instanceof multer.MulterError) {
    statusCode = 400;
    if (err.code === "LIMIT_FILE_SIZE") {
      message = `File too large. Maximum size is ${MAX_PDF_SIZE_MB}MB`;
    }
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors,
  });
};

export { errorHandler };
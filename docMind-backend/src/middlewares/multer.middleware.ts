import multer from "multer";
import crypto from "crypto";
import { ApiError } from "../utils/ApiError";
import { MAX_PDF_SIZE_MB } from "../constants";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (_req, _file, cb) => {
    const uniqueName = `${Date.now()}-${crypto.randomBytes(8).toString("hex")}.pdf`;
    cb(null, uniqueName);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: MAX_PDF_SIZE_MB * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new ApiError(400, "Only PDF files are allowed"));
    }
    cb(null, true);
  },
});
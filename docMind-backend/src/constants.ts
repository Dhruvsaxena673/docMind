export const DB_NAME = "docmind";

export const MAX_PDF_SIZE_MB = 10;
export const CHUNK_SIZE = 800;
export const CHUNK_OVERLAP = 150;

export const DOCUMENT_STATUSES = [
  "uploaded",
  "processing",
  "ready",
  "failed",
] as const;
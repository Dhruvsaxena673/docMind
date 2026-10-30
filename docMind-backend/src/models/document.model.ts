import mongoose from "mongoose";
import { DOCUMENT_STATUSES } from "../constants";

export interface IDocument extends mongoose.Document {
  owner: mongoose.Types.ObjectId;
  originalName: string;
  fileSize: number;
  pageCount: number;
  chunkCount: number;
  status: (typeof DOCUMENT_STATUSES)[number];
  errorMessage?: string;
}

const documentSchema = new mongoose.Schema(
  {
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
      index:true
    },
    originalName:{
      type:String,
      required:true,
      trim:true
    },
    fileSize:{
      type:Number,
      requied:true
    },
    pageCount:{
      type:Number,
      default:0
    },
    chunkCount:{
      type:Number,
      default:0
    },
    status:{
      type:String,
      enum: DOCUMENT_STATUSES, default: "uploaded" 
    },
    errorMessage: { type: String },
  },{timestamps:true});

export const Document = mongoose.model<IDocument>("Document",documentSchema);
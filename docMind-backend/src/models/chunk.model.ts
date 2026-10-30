import mongoose, { Schema, Document as MongooseDocument } from "mongoose";

export interface IChunk extends MongooseDocument {
  document: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  text: string;
  pageNumber: number;
  chunkIndex: number;
  embedding: number[];
}

const chunkSchema=new mongoose.Schema(
  {
    document:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Document",
      required:true,
      index:true
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
      index:true
    },
    text:{ 
      type: String, 
      required: true 
    },
    pageNumber:{ 
      type: Number, 
      required: true 
    },
    chunkIndex:{ 
      type: Number,
      required: true 
      },
    embedding:{ 
      type: [Number], 
      default: [], 
      select: false 
    },
  },{timestamps:true});

export const Chunk=mongoose.model<IChunk>("Chumk",chunkSchema);
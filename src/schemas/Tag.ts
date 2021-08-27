import mongoose, { Document, Schema } from "mongoose";

type Tag = Document & Record<string, unknown>;

const MyTagSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TagSchema = mongoose.model<Tag>("Tag", MyTagSchema);

export { TagSchema };

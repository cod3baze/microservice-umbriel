import mongoose, { Document, Schema } from "mongoose";

type Contact = Document & Record<string, unknown>;

const MyContactSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ContactSchema = mongoose.model<Contact>("Contact", MyContactSchema);

export { ContactSchema };

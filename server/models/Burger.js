import mongoose from "mongoose";
const Schema = mongoose.Schema

export const BurgerSchema = new Schema({
  title: { type: String, required: true, unique: true },
  id: { type: Number, required: true },
  price: { type: Number, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

// export default BurgerSchema
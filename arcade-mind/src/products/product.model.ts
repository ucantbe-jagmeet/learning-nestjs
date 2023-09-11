import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String },
});

export interface Product {
  id?: string;
  title: string;
  description: string;
  price: String;
}

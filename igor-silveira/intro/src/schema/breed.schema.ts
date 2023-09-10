import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BreedDocument = HydratedDocument<Breed>;

@Schema()
export class Breed {
  @Prop()
  name: string;
}

export const CatSchema = SchemaFactory.createForClass(Breed);

import { Document } from 'mongoose';

export interface ICidade extends Document {
  _id: string;
  nome: string;
}

import { Document } from 'mongoose';

export interface ICidade extends Document {
  nome: string;
}

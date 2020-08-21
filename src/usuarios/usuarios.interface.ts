import { Document } from 'mongoose';

export interface IUsuario extends Document {
  nome: string;
  login: string;
  dataAniversario: Date;
  senha: string;
  ativo: boolean;
  cidade: {
    nome: string;
    _id: string;
  }
}

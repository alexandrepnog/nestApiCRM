import * as mongoose from 'mongoose';

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/camelcase
const mongoo_paginate = require('mongoose-paginate-v2');

export const UsuariosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    login: { type: String, required: true },
    dataAniversario: {type: Date, required: true},
    ativo: { type: Boolean, required: true },
    senha: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

UsuariosSchema.plugin(mongoo_paginate);

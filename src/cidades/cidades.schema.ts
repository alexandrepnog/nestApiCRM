import * as mongoose from 'mongoose';

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/camelcase
const mongoo_paginate = require('mongoose-paginate-v2');

export const CidadesSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true }
  },
  {
    timestamps: true,
  },
);

CidadesSchema.plugin(mongoo_paginate);

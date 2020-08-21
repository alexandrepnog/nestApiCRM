import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult } from 'mongoose';

import { ICidade } from './cidades.interface';

@Injectable()
export class CidadesService {
  constructor(
    @InjectModel('Cidade') private CidadeModel: PaginateModel<ICidade>,
  ) {}

  async create(cidade: ICidade) {
    try {
      const createCidade = new this.CidadeModel(cidade);
      return await createCidade.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(
    filters: Array<string>,
    page: number,
    limit: number,
  ): Promise<PaginateResult<ICidade>> {
    return await this.CidadeModel.paginate(filters, { page, limit });
  }

  async getById(id: string) {
    return await this.CidadeModel.findById(id).exec();
  }

  async udpate(id: string, cidade: ICidade) {
    return await this.CidadeModel.findByIdAndUpdate(id, cidade, { new: true });
  }

  async delete(id: string) {
    await this.CidadeModel.findByIdAndDelete(id);
  }
}

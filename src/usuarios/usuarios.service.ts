import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult } from 'mongoose';

import { IUsuario } from './usuarios.interface';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('Usuario') private UsuarioModel: PaginateModel<IUsuario>,
  ) {}

  async create(usuario: IUsuario) {
    try {
      const createUsuario = new this.UsuarioModel(usuario);
      return await createUsuario.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(
    filters: Array<string>,
    page: number,
    limit: number,
  ): Promise<PaginateResult<IUsuario>> {
    return await this.UsuarioModel.paginate(filters, { page, limit });
  }

  async getById(id: string) {
    return await this.UsuarioModel.findById(id).exec();
  }

  async udpate(id: string, usuario: IUsuario) {
    return await this.UsuarioModel.findByIdAndUpdate(id, usuario, { new: true });
  }

  async delete(id: string) {
    await this.UsuarioModel.findByIdAndDelete(id);
  }
}

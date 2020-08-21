import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from '@nestjs/common';
import { PaginateResult } from 'mongoose';

import { IUsuario } from './usuarios.interface';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}

  @Post()
  async create(@Body() usuario: IUsuario): Promise<IUsuario> {
    
    // if (usuario.nome.length < 10) {
    //   throw new BadRequestException('o nome deve ter mais de 10 caracteres !');
    // }

    return this.usuarioService.create(usuario);
  }

  @Get()
  async getAll(
    @Request() req,
    @Query() query,
  ): Promise<PaginateResult<IUsuario>> {
    const { page = 1, limit = 5 } = query;
    return this.usuarioService.getAll(req.filters, page, limit);
  }

  @Get(':_id')
  async getBYId(@Param('_id') _id: string): Promise<IUsuario> {
    return this.usuarioService.getById(_id);
  }

  @Put(':_id')
  async update(
    @Param('_id') _id: string,
    @Body() usuario: IUsuario,
  ): Promise<IUsuario> {
    return this.usuarioService.udpate(_id, usuario);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    this.usuarioService.delete(_id);
  }
}

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

  @Get(':id')
  async getBYId(@Param('id') id: string): Promise<IUsuario> {
    return this.usuarioService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usuario: IUsuario,
  ): Promise<IUsuario> {
    return this.usuarioService.udpate(id, usuario);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.usuarioService.delete(id);
  }
}

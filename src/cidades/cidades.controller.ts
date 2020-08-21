import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from '@nestjs/common';
import { PaginateResult } from 'mongoose';

import { ICidade } from './cidades.interface';
import { CidadesService } from './cidades.service';

@Controller('cidades')
export class CidadesController {
  constructor(private cidadeService: CidadesService) {}

  @Post()
  async create(@Body() cidade: ICidade): Promise<ICidade> {
    
    // if (cidade.nome.length < 10) {
    //   throw new BadRequestException('o nome deve ter mais de 10 caracteres !');
    // }

    return this.cidadeService.create(cidade);
  }

  @Get()
  async getAll(
    @Request() req,
    @Query() query,
  ): Promise<PaginateResult<ICidade>> {
    const { page = 1, limit = 5 } = query;
    return this.cidadeService.getAll(req.filters, page, limit);
  }

  @Get(':_id')
  async getBYId(@Param('_id') _id: string): Promise<ICidade> {
    return this.cidadeService.getById(_id);
  }

  @Put(':_id')
  async update(
    @Param('_id') _id: string,
    @Body() cidade: ICidade,
  ): Promise<ICidade> {
    return this.cidadeService.udpate(_id, cidade);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    this.cidadeService.delete(_id);
  }
}

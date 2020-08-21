import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { getFilters } from './../middlewares/filters.middlewares';
import { UsuariosController } from './usuarios.controller';
import { UsuariosSchema } from './usuarios.schema';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usuario', schema: UsuariosSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer //teste
      .apply(getFilters)
      .forRoutes({ path: 'usuarios', method: RequestMethod.GET });
  }
}

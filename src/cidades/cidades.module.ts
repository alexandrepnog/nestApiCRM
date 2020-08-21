import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { getFilters } from './../middlewares/filters.middlewares';
import { CidadesController } from './cidades.controller';
import { CidadesSchema } from './cidades.schema';
import { CidadesService } from './cidades.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cidade', schema: CidadesSchema }]),
  ],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(getFilters)
      .forRoutes({ path: 'cidades', method: RequestMethod.GET });
  }
}

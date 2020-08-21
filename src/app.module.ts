import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CidadesModule } from './cidades/cidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ expandVariables: true, isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true, //teste1 teste2 teste 3
    }),
    UsuariosModule,
    CidadesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

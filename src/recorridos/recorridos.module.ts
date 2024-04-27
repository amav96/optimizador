import { Module } from '@nestjs/common';
import { RecorridosController } from './recorridos.controller';
import { RecorridosService } from './recorridos.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [RecorridosController],
  providers: [RecorridosService],
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'], // Ruta del archivo .env
      isGlobal: true, // Hacer que el módulo esté disponible globalmente
    }),
  ]
})
export class RecorridosModule {}
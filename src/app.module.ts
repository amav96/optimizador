import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RecorridosModule } from './recorridos/recorridos.module';
import { AuthMiddleware } from './recorridos/auth.middleware';


@Module({
  imports: [
    RecorridosModule,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('recorridos');
  }
}
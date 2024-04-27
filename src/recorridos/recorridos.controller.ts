import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecorridosService } from './recorridos.service';
import { Route } from './interfaces/recorrido.interface';
import { OptimizarDto } from './dto/optimizar.dto';

@Controller('recorridos')
export class RecorridosController {

  constructor(private recorridosService: RecorridosService) {}

  @Post()
  optimizar(@Body() optimizarDto: OptimizarDto ): Promise<Route> {
    return this.recorridosService.optimizar(optimizarDto);
  }


}
import { Injectable } from '@nestjs/common';
import { OptimizarRequest,  Route } from './interfaces/recorrido.interface';
import { OptimizarDto } from './dto/optimizar.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecorridosService {
  
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
  ) {}
  

  async optimizar(optimizarDto: OptimizarDto): Promise<Route> {
    const apiKey = this.configService.get<string>('HERE_API_KEY');
    const request: OptimizarRequest = {
        start: `${optimizarDto.start.lat},${optimizarDto.start.lng}`,
        end: `${optimizarDto.end.lat},${optimizarDto.end.lng}`,
        mode: optimizarDto.mode ?? 'car',
        improveFor: optimizarDto.improveFor ?? 'distance',
    };

    optimizarDto.stops.forEach((stop, index) => {
        request[`destination${index + 1}`] = `${stop.id};${stop.lat},${stop.lng}`;
    });

    try {
        const response = await lastValueFrom(
            this.httpService.get(`https://wps.hereapi.com/v8/findsequence2?&apiKey=${apiKey}`, { params: request }).pipe(
                map(resp => resp.data)
            )
        );
        return response.results;
    } catch (error) {
      return error.message ?? error
    }
}
}


import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(
        private configService: ConfigService
      ) {}

    use(req: Request, res: Response, next: NextFunction) {
    if(!req.body.key){
        return res.status(404).json({ message: "Key is required" });
    }

    if(req.body.key !== this.configService.get<string>('APP_OPTIMIZADOR_KEY')){
        return res.status(403).json({ message: "Key is invalid" });
    }
    next();
  }
}

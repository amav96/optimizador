import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsIn, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

export class BaseLocationDto {
    @IsNotEmpty()
    @IsNumber()
    lat: number;
  
    @IsNotEmpty()
    @IsNumber()
    lng: number;
  }
  
  export class StopDto extends BaseLocationDto {
    @IsNotEmpty()
    @IsString()
    id: string;
  }
  
  export class StartDto extends BaseLocationDto {}
  
  export class EndDto extends BaseLocationDto {}
  
  export class OptimizarDto {
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => StopDto)
    stops: StopDto[];

    @IsObject()
    start: StartDto

    @IsObject()
    end: EndDto

    @IsOptional()
    @IsIn(['car', 'truck', 'bicycle', 'scooter', 'taxi', 'bus', 'pedestrian'])
    mode: string

    @IsOptional()
    @IsIn(['distance', 'time'])
    improveFor: string

    @IsString()
    key: string

  }
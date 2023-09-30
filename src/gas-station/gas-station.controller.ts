import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { CreateGas_StationDto } from './dto/create-gas-station.dto';
import { Gas_Station } from './models/gas-station.model';
import { UpdateGas_StationDto } from './dto/update-gas-station.dto';

@Controller("gas-station")
export class GasStationController {
  constructor(private readonly gas_stationService: GasStationService) {}

  @Post("create")
  async create(@Body() createGas_StationDto: CreateGas_StationDto): Promise<Gas_Station> {
    return this.gas_stationService.create(createGas_StationDto);
  }

  @Get("all")
  async findAll(): Promise<Gas_Station[]> {
    return this.gas_stationService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Gas_Station> {
    return this.gas_stationService.findById(Number(id));
  }

  @Post("one")
  async findByName(@Body() requestBody: {mainName: string}): Promise<Gas_Station> {
    return this.gas_stationService.findByName(requestBody.mainName);
  }

  @Put(":id")
  async UpdateById(@Param("id") id: string, @Body() updateGas_StationDto: UpdateGas_StationDto) {
    return this.gas_stationService.UpdateById(Number(id), updateGas_StationDto);
  }

  @Delete(":id")
  async DeleteById(@Param("id") id: string): Promise<number> {
    return this.gas_stationService.DeleteById(Number(id));
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas-station-fuel-type.service';
import { CreateGas_Station_Fuel_TypeDto } from './dto/create-g-s-fuel-type.dto';
import { Gas_Station_Fuel_Type } from './models/gas-station-fuel-type.model';
import { UpdateGas_Station_Fuel_TypeDto } from './dto/update-g-s-fuel-type.dto';

@Controller("gas-station-fuel-type")
export class GasStationFuelTypeController {
  constructor(private readonly gas_station_fuel_typeService: GasStationFuelTypeService) {}

  @Post("create")
  async create(@Body() createGas_Station_Fuel_TypeDto: CreateGas_Station_Fuel_TypeDto): Promise<Gas_Station_Fuel_Type> {
    return this.gas_station_fuel_typeService.create(createGas_Station_Fuel_TypeDto);
  }

  @Get("all")
  async findAll(): Promise<Gas_Station_Fuel_Type[]> {
    return this.gas_station_fuel_typeService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Gas_Station_Fuel_Type> {
    return this.gas_station_fuel_typeService.findById(Number(id));
  }

  @Put(":id")
  async UpdateById(@Param("id") id: string, @Body() updateGas_Station_Fuel_TypeDto: UpdateGas_Station_Fuel_TypeDto) {
    return this.gas_station_fuel_typeService.UpdateById(Number(id), updateGas_Station_Fuel_TypeDto);
  }

  @Delete(":id")
  async DeleteById(@Param("id") id: string): Promise<number> {
    return this.gas_station_fuel_typeService.DeleteById(Number(id));
  }
}

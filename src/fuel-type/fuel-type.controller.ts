import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelTypeService } from './fuel-type.service';
import { CreateFuel_TypeDto } from './dto/create-fuel-type.dto';
import { Fuel_Type } from './models/fuel_type.model';
import { UpdateFuel_TypeDto } from './dto/update-fuel-type.dto';

@Controller("fuel-type")
export class FuelTypeController {
  constructor(private readonly fuel_typeService: FuelTypeService) {}

  @Post("create")
  async create(@Body() createFuel_TypeDto: CreateFuel_TypeDto): Promise<Fuel_Type> {
    return this.fuel_typeService.create(createFuel_TypeDto);
  }

  @Get("all")
  async findAll(): Promise<Fuel_Type[]> {
    return this.fuel_typeService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Fuel_Type> {
    return this.fuel_typeService.findById(Number(id));
  }

  @Post("one")
  async findByName(@Body() requestBody: {mainName: string}): Promise<Fuel_Type> {
    return this.fuel_typeService.findByName(requestBody.mainName);
  }

  @Put(":id")
  async UpdateById(@Param("id") id: string, @Body() updateFuel_TypeDto: UpdateFuel_TypeDto) {
    return this.fuel_typeService.UpdateById(Number(id), updateFuel_TypeDto);
  }

  @Delete(":id")
  async DeleteById(@Param("id") id: string): Promise<number> {
    return this.fuel_typeService.DeleteById(Number(id));
  }
}

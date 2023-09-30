import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationBranchService } from './gas-station-branch.service';
import { CreateGas_Station_BranchDto } from './dto/create-g-s-branch.dto';
import { Gas_Station_Branch } from './models/gas-station-branch.model';
import { UpdateGas_Station_BranchDto } from './dto/update-g-s-branch.dto';

@Controller("gas-station-branch")
export class GasStationBranchController {
  constructor(private readonly gas_station_branchService: GasStationBranchService) {}

  @Post("create")
  async create(@Body() createGas_Station_Fuel_TypeDto: CreateGas_Station_BranchDto): Promise<Gas_Station_Branch> {
    return this.gas_station_branchService.create(createGas_Station_Fuel_TypeDto);
  }

  @Get("all")
  async findAll(): Promise<Gas_Station_Branch[]> {
    return this.gas_station_branchService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Gas_Station_Branch> {
    return this.gas_station_branchService.findById(Number(id));
  }

  @Post("one")
  async findByName(@Body() requestBody: {branchName: string}): Promise<Gas_Station_Branch> {
    return this.gas_station_branchService.findByName(requestBody.branchName);
  }

  @Put(":id")
  async UpdateById(@Param("id") id: string, @Body() updateGas_Station_Fuel_TypeDto: UpdateGas_Station_BranchDto) {
    return this.gas_station_branchService.UpdateById(Number(id), updateGas_Station_Fuel_TypeDto);
  }

  @Delete(":id")
  async DeleteById(@Param("id") id: string): Promise<number> {
    return this.gas_station_branchService.DeleteById(Number(id));
  }
}

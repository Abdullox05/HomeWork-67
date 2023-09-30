import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_Station_Fuel_Type } from './models/gas-station-fuel-type.model';
import { CreateGas_Station_Fuel_TypeDto } from './dto/create-g-s-fuel-type.dto';
import { UpdateGas_Station_Fuel_TypeDto } from './dto/update-g-s-fuel-type.dto';

@Injectable()
export class GasStationFuelTypeService {
  constructor(@InjectModel(Gas_Station_Fuel_Type) private Gas_Station_Fuel_TypeRepo: typeof Gas_Station_Fuel_Type) {}

  async create(createGas_Station_Fuel_TypeDto: CreateGas_Station_Fuel_TypeDto): Promise<Gas_Station_Fuel_Type> {
    const gas_station = await this.Gas_Station_Fuel_TypeRepo.create(createGas_Station_Fuel_TypeDto);
    return gas_station;
  }

  async findAll(): Promise<Gas_Station_Fuel_Type[]> {
    return this.Gas_Station_Fuel_TypeRepo.findAll({include: {all: true}});
  }

  async findById(id: number): Promise<Gas_Station_Fuel_Type> {
    return this.Gas_Station_Fuel_TypeRepo.findByPk(id, {include: {all: true}});
  }

  async UpdateById(id: number, updateGas_Station_Fuel_TypeDto: UpdateGas_Station_Fuel_TypeDto): Promise<Gas_Station_Fuel_Type> {
    const data = await this.Gas_Station_Fuel_TypeRepo.update(updateGas_Station_Fuel_TypeDto, {
      where: {id},
      returning: true,
    });
    return data[1][0];
  }

  async DeleteById(id: number): Promise<number> {
    return this.Gas_Station_Fuel_TypeRepo.destroy({where: {id}});
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Fuel_Type } from './models/fuel_type.model';
import { CreateFuel_TypeDto } from './dto/create-fuel-type.dto';
import { UpdateFuel_TypeDto } from './dto/update-fuel-type.dto';

@Injectable()
export class FuelTypeService {
  constructor(@InjectModel(Fuel_Type) private Fuel_TypeRepo: typeof Fuel_Type) {}

  async create(createFuel_TypeDto: CreateFuel_TypeDto): Promise<Fuel_Type> {
    const fuel_type = await this.Fuel_TypeRepo.create(createFuel_TypeDto);
    return fuel_type;
  }

  async findAll(): Promise<Fuel_Type[]> {
    return this.Fuel_TypeRepo.findAll({include: {all: true}});
  }

  async findById(id: number): Promise<Fuel_Type> {
    return this.Fuel_TypeRepo.findByPk(id, {include: {all: true}});
  }

  async findByName(fuelName: string): Promise<Fuel_Type> {
    return this.Fuel_TypeRepo.findOne({where: {fuelName}, include: {all: true}});
  }

  async UpdateById(id: number, updateFuel_TypeDto: UpdateFuel_TypeDto): Promise<Fuel_Type> {
    const data = await this.Fuel_TypeRepo.update(updateFuel_TypeDto, {
      where: {id},
      returning: true,
    });
    return data[1][0];
  }

  async DeleteById(id: number): Promise<number> {
    return this.Fuel_TypeRepo.destroy({where: {id}});
  }
}

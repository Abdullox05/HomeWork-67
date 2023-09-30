import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_Station } from './models/gas-station.model';
import { CreateGas_StationDto } from './dto/create-gas-station.dto';
import { UpdateGas_StationDto } from './dto/update-gas-station.dto';

@Injectable()
export class GasStationService {
  constructor(@InjectModel(Gas_Station) private Gas_StationRepo: typeof Gas_Station) {}

  async create(createGas_StationDto: CreateGas_StationDto): Promise<Gas_Station> {
    const gas_station = await this.Gas_StationRepo.create(createGas_StationDto);
    return gas_station;
  }

  async findAll(): Promise<Gas_Station[]> {
    return this.Gas_StationRepo.findAll({include: {all: true}});
  }

  async findById(id: number): Promise<Gas_Station> {
    return this.Gas_StationRepo.findByPk(id, {include: {all: true}});
  }

  async findByName(mainName: string): Promise<Gas_Station> {
    return this.Gas_StationRepo.findOne({where: {mainName}, include: {all: true}});
  }

  async UpdateById(id: number, updateGas_StationDto: UpdateGas_StationDto): Promise<Gas_Station> {
    const data = await this.Gas_StationRepo.update(updateGas_StationDto, {
      where: {id},
      returning: true,
    });
    return data[1][0];
  }

  async DeleteById(id: number): Promise<number> {
    return this.Gas_StationRepo.destroy({where: {id}});
  }
}

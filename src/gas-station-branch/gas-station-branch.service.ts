import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_Station_Branch } from './models/gas-station-branch.model';
import { CreateGas_Station_BranchDto } from './dto/create-g-s-branch.dto';
import { UpdateGas_Station_BranchDto } from './dto/update-g-s-branch.dto';

@Injectable()
export class GasStationBranchService {
  constructor(@InjectModel(Gas_Station_Branch) private Gas_Station_BranchRepo: typeof Gas_Station_Branch) {}

  async create(createGas_Station_BranchDto: CreateGas_Station_BranchDto): Promise<Gas_Station_Branch> {
    const gas_station = await this.Gas_Station_BranchRepo.create(createGas_Station_BranchDto);
    return gas_station;
  }

  async findAll(): Promise<Gas_Station_Branch[]> {
    return this.Gas_Station_BranchRepo.findAll({include: {all: true}});
  }

  async findById(id: number): Promise<Gas_Station_Branch> {
    return this.Gas_Station_BranchRepo.findByPk(id, {include: {all: true}});
  }

  async findByName(branchName: string): Promise<Gas_Station_Branch> {
    return this.Gas_Station_BranchRepo.findOne({where: {branchName}, include: {all: true}});
  }

  async UpdateById(id: number, updateGas_Station_BranchDto: UpdateGas_Station_BranchDto): Promise<Gas_Station_Branch> {
    const data = await this.Gas_Station_BranchRepo.update(updateGas_Station_BranchDto, {
      where: {id},
      returning: true,
    });
    return data[1][0];
  }

  async DeleteById(id: number): Promise<number> {
    return this.Gas_Station_BranchRepo.destroy({where: {id}});
  }
}

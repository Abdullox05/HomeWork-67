import { Module } from '@nestjs/common';
import { GasStationBranchService } from './gas-station-branch.service';
import { GasStationBranchController } from './gas-station-branch.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_Station_Branch } from './models/gas-station-branch.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_Station_Branch])],
  providers: [GasStationBranchService],
  controllers: [GasStationBranchController]
})
export class GasStationBranchModule {}

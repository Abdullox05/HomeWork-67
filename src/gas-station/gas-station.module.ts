import { Module } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GasStationController } from './gas-station.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_Station } from './models/gas-station.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_Station])],
  providers: [GasStationService],
  controllers: [GasStationController]
})
export class GasStationModule {}

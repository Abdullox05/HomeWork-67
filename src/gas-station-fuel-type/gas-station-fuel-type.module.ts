import { Module } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas-station-fuel-type.service';
import { GasStationFuelTypeController } from './gas-station-fuel-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_Station_Fuel_Type } from './models/gas-station-fuel-type.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_Station_Fuel_Type])],
  providers: [GasStationFuelTypeService],
  controllers: [GasStationFuelTypeController]
})
export class GasStationFuelTypeModule {}

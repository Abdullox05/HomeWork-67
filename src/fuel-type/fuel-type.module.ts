import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel-type.service';
import { FuelTypeController } from './fuel-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fuel_Type } from './models/fuel_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Fuel_Type])],
  providers: [FuelTypeService],
  controllers: [FuelTypeController]
})
export class FuelTypeModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas-station/gas-station.module';
import { Gas_Station } from './gas-station/models/gas-station.model';
import { GasStationBranchModule } from './gas-station-branch/gas-station-branch.module';
import { Gas_Station_Branch } from './gas-station-branch/models/gas-station-branch.model';
import { GasStationFuelTypeModule } from './gas-station-fuel-type/gas-station-fuel-type.module';
import { Gas_Station_Fuel_Type } from './gas-station-fuel-type/models/gas-station-fuel-type.model';
import { FuelTypeModule } from './fuel-type/fuel-type.module';
import { FuelTypeService } from './fuel-type/fuel-type.service';
import { FuelTypeController } from './fuel-type/fuel-type.controller';
import { Fuel_Type } from './fuel-type/models/fuel_type.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: String(process.env.PG_PASSWORD),
      database: process.env.PG_DB,
      models: [Gas_Station, Gas_Station_Branch, Gas_Station_Fuel_Type, Fuel_Type],
      autoLoadModels: true,
      logging: true,      
    }),
    GasStationModule,
    GasStationBranchModule,
    GasStationFuelTypeModule,
    FuelTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

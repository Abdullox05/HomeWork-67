import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Gas_Station_Fuel_Type } from 'src/gas-station-fuel-type/models/gas-station-fuel-type.model';

interface Fuel_TypeCreationAttr {
  fuelName: string;
}

@Table({tableName:"fuel_type"})
export class Fuel_Type extends Model<Fuel_Type, Fuel_TypeCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  fuelName: string;

  @HasMany(() => Gas_Station_Fuel_Type)
  gasStationFuelTypes: Array<Gas_Station_Fuel_Type>;
}

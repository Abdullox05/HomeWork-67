import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Gas_Station } from 'src/gas-station/models/gas-station.model';
import { Gas_Station_Fuel_Type } from "src/gas-station-fuel-type/models/gas-station-fuel-type.model";

interface Gas_Satation_BranchCreationAttr {
  gasSatationId: number;
  branchName: string;
  address: string;
  location: string;
  phone: string;
}

@Table({tableName:"gas_station_branch"})
export class Gas_Station_Branch extends Model<Gas_Station_Branch, Gas_Satation_BranchCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Gas_Station)

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gasStationId: number;

  @BelongsTo(() => Gas_Station)
  gasStations: Gas_Station[];
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  branchName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @HasMany(() => Gas_Station_Fuel_Type)
  gasStationFuelTypes: Array<Gas_Station_Fuel_Type>;
}

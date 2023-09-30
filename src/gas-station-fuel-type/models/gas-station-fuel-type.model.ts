import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Fuel_Type } from "src/fuel-type/models/fuel_type.model";
import { Gas_Station_Branch } from "src/gas-station-branch/models/gas-station-branch.model";


interface Gas_Satation_Fuel_TypeCreationAttr {
  gasSatationBranchId: number;
  fuelTypeId: number;
  price: number;
  isAvailable: boolean;
}

@Table({tableName:"gas_station_fuel_type"})
export class Gas_Station_Fuel_Type extends Model<Gas_Station_Fuel_Type, Gas_Satation_Fuel_TypeCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Gas_Station_Branch)

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gasStationBranchId: number;

  @BelongsTo(() => Gas_Station_Branch)
  gasStationBranches: Gas_Station_Branch[];
  
  @ForeignKey(() => Fuel_Type)

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fuelTypeId: number;

  @BelongsTo(() => Fuel_Type)
  gasStationFuelTypes: Fuel_Type[];

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isAvailable: boolean;
}

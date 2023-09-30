import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Gas_Station_Branch } from 'src/gas-station-branch/models/gas-station-branch.model';

interface Gas_SatationCreationAttr {
  mainName: string;
}

@Table({tableName:"gas_station"})
export class Gas_Station extends Model<Gas_Station, Gas_SatationCreationAttr>{
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
  mainName: string;

  @HasMany(() => Gas_Station_Branch)
  gasStationBranches: Array<Gas_Station_Branch>;
}

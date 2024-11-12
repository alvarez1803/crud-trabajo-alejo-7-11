import "reflect-metadata";
import { DataSource } from "typeorm";
import { dogs } from "./entities/dogs";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [dogs],
  migrations:[],
  subscribers:[]
});
import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { RewardBalance } from "@models/orm/rewardBalance";
import { RewardTransaction } from "@models/orm/rewardTransaction";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [RewardBalance],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

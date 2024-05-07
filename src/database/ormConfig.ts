import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Profile } from "../entities/Profile.entity";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Amma@431",
  database: "bookie",
  synchronize: true,
  logging: true,
  entities: [User, Profile],
  migrations: ["src/database/migrations  /**/*.ts"],
  subscribers: [
    // "src/subscriber/**/*.ts"
  ],
  // "cli": {
  // 	"entitiesDir": "src/entity",
  // 	"migrationsDir": "src/migration",
  // 	"subscribersDir": "src/subscriber"
  // }
});

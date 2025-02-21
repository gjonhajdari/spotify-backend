import * as dotenv from "dotenv";
import type { DataSourceOptions } from "typeorm";
dotenv.config();

const databaseConfig: { [key: string]: DataSourceOptions } = {
	development: {
		type: "sqlite",
		database: "db-development.sqlite",
		synchronize: true,
		entities: ["dist/**/*.entity.{.ts,.js}"],
	},
	testing: {
		type: "sqlite",
		database: "db-testing.sqlite",
		synchronize: true,
		entities: ["dist/**/*.entity.{.ts,.js}"],
	},
	production: {
		type: "postgres",
		url: process.env.DATABASE_URL,
		synchronize: false,
		entities: ["dist/**/*.entity.js"],
	},
};

export default () => {
	console.log(process.env.NODE_ENV);
	return databaseConfig[process.env.NODE_ENV || "development"];
};

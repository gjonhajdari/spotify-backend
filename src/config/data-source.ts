import { DataSource } from "typeorm";
import databaseConfig from "./database.config";

const config = databaseConfig();
const AppDatasource = new DataSource(config);

AppDatasource.initialize()
	.then(() => console.log("DataSource has been initialized"))
	.catch(() => console.error("Error during DataSource initialization"));

export { AppDatasource };

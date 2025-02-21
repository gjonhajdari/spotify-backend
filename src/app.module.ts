import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import databaseConfig from "./config/database.config";

@Module({
	imports: [TypeOrmModule.forRoot(databaseConfig()), ConfigModule.forRoot()],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

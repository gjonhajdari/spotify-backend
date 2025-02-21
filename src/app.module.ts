import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumsModule } from "./albums/albums.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppDatasource } from "./config/data-source";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(AppDatasource.options),
		UsersModule,
		AlbumsModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{ provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
	],
})
export class AppModule {}

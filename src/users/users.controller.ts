import { Body, Controller, Get, Post } from "@nestjs/common";
import { Serialize } from "src/interceptors/serialize-data.interceptor";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { LoginUserDto } from "./dtos/login-user.dto";
import { UserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";

@Controller("/auth")
@Serialize(UserDto)
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private authService: AuthService,
	) {}

	@Get()
	getAllUsers() {
		return this.usersService.findAll();
	}

	@Post("/signup")
	createUser(@Body() body: CreateUserDto) {
		return this.authService.signup(body);
	}

	@Post("/login")
	loginUser(@Body() body: LoginUserDto) {
		return this.authService.login(body);
	}
}

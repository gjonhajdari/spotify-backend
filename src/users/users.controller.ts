import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Controller("/auth")
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

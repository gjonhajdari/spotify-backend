import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService) {}

	async signup(payload: CreateUserDto) {
		const user = await this.usersService.findByEmail(payload.email);
		if (user) throw new Error("Email is already in use");

		const hashedPassword = await bcrypt.hash(payload.password, 10);

		const newUser = await this.usersService.create(
			payload.firstName,
			payload.lastName,
			payload.username,
			payload.email,
			hashedPassword,
			payload.phone,
			payload.isCreator,
		);

		return newUser;
	}

	login() {}
}

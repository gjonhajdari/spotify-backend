import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dtos/create-user.dto";
import { LoginUserDto } from "./dtos/login-user.dto";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService) {}

	async signup(payload: CreateUserDto) {
		const user = await this.usersService.findUser(payload.email);
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

	async login(payload: LoginUserDto) {
		const user = await this.usersService.findUser(
			payload.email,
			payload.username,
		);

		if (!user) throw new NotFoundException("User does not exist");

		const isEqual = await bcrypt.compare(payload.password, user.password);
		if (!isEqual) throw new BadRequestException("Password is incorrect");

		return user;
	}
}

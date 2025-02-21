import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private repo: Repository<User>) {}

	findByEmail(email: string) {
		return this.repo.findOne({ where: { email } });
	}

	create(
		firstName: string,
		lastName: string,
		username: string,
		email: string,
		password: string,
		phone: string,
		isCreator?: boolean,
	) {
		const user = this.repo.create({
			firstName,
			lastName,
			username,
			email,
			password,
			phone,
			isCreator,
		});

		return user;
	}
}

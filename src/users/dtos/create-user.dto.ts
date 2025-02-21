import {
	IsBoolean,
	IsEmail,
	IsOptional,
	IsPhoneNumber,
	IsString,
	IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
	@IsString()
	firstName: string;

	@IsString()
	lastName: string;

	@IsString()
	username: string;

	@IsEmail()
	email: string;

	@IsPhoneNumber()
	phone: string;

	@IsString()
	password: string;

	@IsOptional()
	@IsBoolean()
	isCreator: boolean;
}

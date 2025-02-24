import { IsEmail, IsOptional, IsString, ValidateIf } from "class-validator";

export class LoginUserDto {
	@IsEmail()
	@ValidateIf((o) => !o.username || o.email)
	email?: string;

	@IsString()
	@ValidateIf((o) => !o.email || o.username)
	username?: string;

	@IsString()
	password: string;
}

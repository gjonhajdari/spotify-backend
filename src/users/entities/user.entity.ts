import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn({ name: "user_id" })
	userId: number;

	@Column({ name: "first_name", length: 50 })
	firstName: string;

	@Column({ name: "last_name", length: 50 })
	lastName: string;

	@Column({ length: 30, unique: true })
	username: string;

	@Column({ length: 320 })
	email: string;

	@Column({ length: 60, select: false })
	password: string;

	@Column({ length: 30 })
	phone: string;

	@CreateDateColumn({ name: "date_created" })
	dateCreated: Date;

	@Column({ name: "is_creator", default: false })
	isCreator: boolean;
}

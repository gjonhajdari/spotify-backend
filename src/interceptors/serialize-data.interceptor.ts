import {
	CallHandler,
	ExecutionContext,
	NestInterceptor,
	UseInterceptors,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable, map } from "rxjs";

interface ClassConstructor {
	new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
	return UseInterceptors(new SerializeDataInterceptor(dto));
}

export class SerializeDataInterceptor implements NestInterceptor {
	constructor(private dto: any) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map((data) => {
				return plainToInstance(this.dto, data, {
					excludeExtraneousValues: false,
				});
			}),
		);
	}
}

import { AvailableCountries } from "src/typeorm/user.entity";

export class CreateUserDto {
  readonly fullName: string;
  readonly email: string;
  readonly phone: string;
  readonly age: number;
  readonly country: AvailableCountries;
}
import { AvailableCountries } from "src/typeorm/user.entity";

interface IUser {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  country: AvailableCountries;
}

export class EditUserDto {
  readonly id: number;
  readonly body: IUser;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AvailableCountries {
  CHINA = 'China',
  CANADA = 'Canada',
  UKRAINE = 'Ukraine',
  AUSTRALIA = 'Australia',
  GERMANY = 'Germany',
  FINLAND = 'Finland',
  DENMARK = 'Denmark',
  JAPAN = 'Japan',
  ITALY = 'Italy',
  OTHER = 'Other'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: AvailableCountries, default: AvailableCountries.CHINA })
  country: AvailableCountries
}
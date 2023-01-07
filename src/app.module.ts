import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import entities from './typeorm';
import { UsersModule } from './users/users.module';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
        return {
          type: 'postgres',
          host: DB_HOST,
          port: +DB_PORT,
          username: DB_USERNAME,
          password: DB_PASSWORD,
          database: DB_NAME,
          entities,
          synchronize: true
        }
      }
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

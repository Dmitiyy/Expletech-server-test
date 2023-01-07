import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  createNewUser(data: CreateUserDto) {
    const createdUser = this.userRepository.create(data);
    return this.userRepository.save(createdUser);
  }

  findAllUsers() {
    const users = this.userRepository.find();
    return users;
  }

  findOneUser(id: number) {
    const existingUser = this.userRepository.findOneBy({ id });
    return existingUser;
  }

  async editUser(data: EditUserDto) {
    const user = await this.findOneUser(data.id);
    if (user) {
      return this.userRepository.update(user.id, { ...data.body });
    } else return { error: "No user is found" };
  }

  async deleteUser(id: number) {
    const user = await this.findOneUser(id);
    return this.userRepository.remove(user);
  }
}
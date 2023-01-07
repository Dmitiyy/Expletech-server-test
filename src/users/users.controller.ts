import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createNewUser(data);
  }

  @Get('all')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: number) {
    return this.usersService.findOneUser(id);
  }

  @Post('edit')
  editUser(@Body() data: EditUserDto) {
    return this.usersService.editUser(data);
  }

  @Get('delete/:id')
  deleteOneUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
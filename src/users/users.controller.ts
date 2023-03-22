import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // this is the root level of the url /users
  // Get /users
  @Get()
  getUsers() {
    return ['Hello User'];
  }
  // Get /users/:id --> {...}
  @Get(':id')
  getUserById() {
    return {};
  }
  // Post /users
  @Post()
  createUser(){
    return{}
  }

  @Put(':id')
  updateUser(){
    return{}
  }
// Delete /users/:id
  @Delete(':id')
  deleteUser(){
    return{}

  }
}

import {
    Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService){}
  // this is the root level of the url /users
  // Get /users

  @Get()
  getUsers(@Query('role') role:'sales' |'hr' ) {
    return this.userService.getUsers(role)
  }

  // Get users with a filtering method
  // users/?type=

  // Get /users/:id --> {...}
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
    };
  }


  @Post()
  createUser(@Body() createUserDto:CreateUserDto){
    return {
      name: createUserDto.name,
      id: createUserDto.id,
      role: createUserDto.role
    }
  }
  @Put(':id')
  updateUser(@Param('id')id:string, @Body() updateUserDto :UpdateUserDto) {
    return {
      id,
      name: updateUserDto
    };
  }
  // // Delete /users/:id
  @Delete(':id')
  deleteUser() {
    return {};
  }
}

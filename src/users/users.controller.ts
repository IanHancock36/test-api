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

@Controller('users')
export class UsersController {
  // this is the root level of the url /users
  // Get /users

  @Get()
  getUsers(@Query('type') type: string) {
    return [{ type }];
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
      name: createUserDto.name
    }
  }
  // @Put(':id')
  // updateUser() {
  //   return {};
  // }
  // // Delete /users/:id
  // @Delete(':id')
  // deleteUser() {
  //   return {};
  // }
}

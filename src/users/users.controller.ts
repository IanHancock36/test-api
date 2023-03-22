import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // this is the root level of the url /users
    // Get /users
    @Get()
    getUsers(){
        return[]
    }
    // Get /users/:id --> {...}
    @Get(':id')
    getUserById(){

    }


}

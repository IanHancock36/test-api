import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'Steve', role: 'sales' },
    { id: 1, name: 'Riahcard', role: 'hr' },
    // { id: 2, name: 'Ron', role: 'Development' },
  ];
 getUsers(role:'sales' |'hr' ){
    if (role){
        return this.users.filter((user)=> user.role === role)
    }
    return this.users
 }




}


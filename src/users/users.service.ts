import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'Steve', role: 'sales' },
    { id: 1, name: 'Riahcard', role: 'hr' },
    // { id: 2, name: 'Ron', role: 'Development' },
  ];
 getUsers(role: 'sales' | 'hr'){
    if (role){
        return this.users.filter((user)=> user.role === role)
    }
    return this.users
 }

 getUser(id:number){
    const user = this.users.find((user)=> user.id === id)

    if(!user){

    throw new Error('user not found')
    }
    return user
 }


updateUser(id: number, updateUserDto:UpdateUserDto){
  this.users = this.users.map((user)=>{
    if(user.id === id){
      return {...user, ...updateUserDto}
    }
    return user
  })
  return this.getUser(id)
}

createUser(createUserDto:CreateUserDto){
    const newUser = {
        ...createUserDto,
        id: Date.now()
    }
    this.users.push(newUser)
    return newUser

}


}


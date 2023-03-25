import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'Steve', role: 'Sales' },
    { id: 1, name: 'Riahcard', role: 'Hr' },
    { id: 2, name: 'Ron', role: 'Development' },
  ];
}

// Get /users  which is an array
// get

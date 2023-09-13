import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username);

    const isValidUser = await bcrypt.compare(password, user.password);
    if (user && isValidUser) {
      const { password, ...result } = user;
      return result; // getting only result from user
    }
    return null;
  }
}

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/models/user.schema';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username);

    const isValidUser = await bcrypt.compare(password, user.password);
    if (user && isValidUser) {
      const { password, ...result } = user;
      return result; // getting only result from user
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.username,
      },
    };

    return { ...user, accessToken: this.jwtService.sign(payload) };
  }
}

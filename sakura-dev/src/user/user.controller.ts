import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/api/user/login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createAuthDto: CreateUserDto): Promise<User> {
    const createdTeam = new this.userModel(createAuthDto);
    return await createdTeam.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOneWithUserName(username: string) {
    return await this.userModel.findOne({ username });
  }
}

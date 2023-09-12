import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Model } from 'mongoose';
import { Auth } from 'src/models/auth.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>,
  ) {}

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {
    const createdTeam = new this.authModel(createAuthDto);
    return await createdTeam.save();
  }

  async findAll() {
    return await this.authModel.find().exec();
  }

  async findOneWithUserName(username: string) {}
}

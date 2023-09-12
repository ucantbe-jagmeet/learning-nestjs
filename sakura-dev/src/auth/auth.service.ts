import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Auth } from 'src/models/auth.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>,
  ) {}

  async validateUser(username: string, password: string) {}
}

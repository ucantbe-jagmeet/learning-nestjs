import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed, BreedDocument } from 'src/schema/breed.schema';

@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private BreedModel: Model<BreedDocument>,
  ) {}

  create(createBreedDto: CreateBreedDto) {
    return 'This action adds a new breed';
  }

  findAll() {
    return `This action returns all breeds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}

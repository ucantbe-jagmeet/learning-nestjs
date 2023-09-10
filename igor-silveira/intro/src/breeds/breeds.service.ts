import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed, BreedDocument } from 'src/schema/breed.schema';

@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private breedModel: Model<BreedDocument>,
  ) {}

  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    const createdBreed = new this.breedModel(createBreedDto);
    return createdBreed.save();
  }

  async findAll() {
    return this.breedModel.find();
  }

  async findOne(name: string) {
    return this.breedModel.findOne({ name });
  }

  async update(
    name: string,
    updateBreedDto: UpdateBreedDto,
  ): Promise<Breed | null> {
    const updatedBreed = await this.breedModel
      .findOneAndUpdate(
        { name },
        { $set: { ...updateBreedDto } },
        { new: true }, // Return the updated document
      )
      .exec();

    if (!updatedBreed) {
      // Handle not found
      return null;
    }

    return updatedBreed;
  }

  async remove(name: string): Promise<Breed | null> {
    const deletedBreed = await this.breedModel
      .findOneAndRemove({ name })
      .exec();

    if (!deletedBreed) {
      // Handle not found
      return null;
    }

    return deletedBreed;
  }
}

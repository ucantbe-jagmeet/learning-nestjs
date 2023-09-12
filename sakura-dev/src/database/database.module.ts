import { config } from 'dotenv';
config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
const mongoURI = process.env.MONGO_URI!;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: mongoURI,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
})
export class DatabaseModule {}

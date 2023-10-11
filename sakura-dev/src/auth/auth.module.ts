// In your AuthModule
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '3600s' },
    }),
    UserModule,
  ],
  providers: [AuthService, UserService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/utils/constants';
import { JwtModule } from '@nestjs/jwt';
import JwtAuthStrategy from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthStrategy],
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    })],

})
export class AuthModule { }

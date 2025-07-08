import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/repo/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, AuthService ]
})
export class AuthModule {}

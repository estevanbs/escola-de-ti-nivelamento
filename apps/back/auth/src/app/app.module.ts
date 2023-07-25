import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

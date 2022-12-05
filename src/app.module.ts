import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { DatabaseModule } from './database/database.module';
import { TelegramModule } from './telegram/telegram.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    DatabaseModule,
    TelegramModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

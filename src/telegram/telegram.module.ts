import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegramUpdate } from './telegram.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('TELEGRAM_API_TOKEN_BOT'),
        botName: configService.get('TELEGRAM_BOT_NAME'),
      }),
    }),
  ],
  providers: [TelegramUpdate],
})
export class TelegramModule {}

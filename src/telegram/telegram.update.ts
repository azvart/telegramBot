import { Update, Ctx, Start } from 'nestjs-telegraf';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { HttpException, HttpStatus } from '@nestjs/common';

@Update()
export class TelegramUpdate {
  constructor(private event: EventEmitter2) {}

  @Start()
  public async startBot(@Ctx() ctx: any): Promise<string> {
    try {
      this.event.emit('user.save', {
        telegram_id: String(ctx.message.from.id),
        first_name: ctx.message.from.first_name,
        last_name: ctx.message.from.last_name,
        username: ctx.message.from.username,
        language_code: ctx.message.from.language_code,
        is_bot: ctx.message.from.is_bot,
      });
      return 'Добро пожаловать к боту!';
    } catch (error) {
      throw new HttpException(
        'Случилась ошибка, перезапустите бота!',
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}

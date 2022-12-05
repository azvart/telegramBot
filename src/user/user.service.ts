import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { OnEvent } from '@nestjs/event-emitter';

import type { CreateUser } from './types/user.types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  @OnEvent('user.save', { async: true })
  public async saveUser(payload: CreateUser): Promise<UserEntity | boolean> {
    try {
      const existUser = await this.userRepository.find({
        where: { telegram_id: payload.telegram_id },
      });
      if (existUser.length > 0) {
        return true;
      } else {
        const newUser = await this.userRepository.create({ ...payload });
        return await this.userRepository.save(newUser);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST, {
        cause: error,
      });
    }
  }
}

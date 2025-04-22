import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authService: Repository<Auth>,
    private readonly JwtService: JwtService,
  ) {

  }
  async create(createAuthDto: CreateAuthDto) {
    const findUser = await this.authService.findOne({ where: { name: createAuthDto.name } } as any)
    if (findUser) return 'this account is signed up, please log in.'
    // todo: redis save user
    createAuthDto.password = bcryptjs.hashSync(createAuthDto.password, 10)
    await this.authService.save(createAuthDto)
    return 'signed up successful!'
  }
  async login(loginData: CreateAuthDto) {
    const findUser = await this.authService.findOne(
      { where: { name: loginData.name } }
    );
    // 没有找到
    if (!findUser) return new BadRequestException('用户不存在');

    // 找到了对比密码
    const compareRes: boolean = bcryptjs.compareSync(
      loginData.password,
      findUser.password,
    );
    // 密码不正确
    if (!compareRes) return new BadRequestException('密码不正确');
    const payload = { name: findUser.name };

    return {
      access_token: this.JwtService.sign(payload),
      msg: '登录成功',
    };
  }

  findAll(): Promise<Auth[]> {
    return this.authService.find();
  }

  findOne(query: any): Promise<Auth | null> {
    return this.authService.findOneBy(query);
  }

  async remove(id: number): Promise<void> {
    await this.authService.delete(id);
  }
  update(id: number, createAuthDto: UpdateAuthDto) {
    return this.authService.update(id, createAuthDto);
  }
}

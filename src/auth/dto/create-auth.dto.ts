// import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
    //   @ApiProperty({ description: '姓名' })
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    //   @ApiProperty({ description: '密码' })
    @IsNotEmpty({ message: 'password is required' })
    password: string;
}
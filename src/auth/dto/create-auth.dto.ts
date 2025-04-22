// import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
    //   @ApiProperty({ description: 'name' })
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    //   @ApiProperty({ description: 'password' })
    @IsNotEmpty({ message: 'password is required' })
    password: string;
}
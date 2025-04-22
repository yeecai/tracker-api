import { IsString, IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    // @IsNotEmpty()
    memo: string;

    // @IsArray()
    @IsNotEmpty()
    exercises: string[] = [];

    // @IsNumber()
    @IsNotEmpty()
    user_id: number;
}

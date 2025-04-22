import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateRecordDto {
    // @IsNumber()
    @IsNotEmpty()
    plan_id: number;

    // @IsNumber()
    @IsNotEmpty()
    user_id: number;
}

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateProfileDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Length(2, 60)
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Length(10, 500)
    description?: string;
}
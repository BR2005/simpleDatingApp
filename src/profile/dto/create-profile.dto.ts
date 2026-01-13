import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProfileDto {
   @IsString()
   @IsNotEmpty()
   @Length(2, 60)
   name: string;

   @IsString()
   @IsNotEmpty()
   @Length(10, 500)
   description: string;
}
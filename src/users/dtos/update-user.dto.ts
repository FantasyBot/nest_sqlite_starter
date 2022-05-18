import { IsEmail, IsString, IsOptional } from 'class-validator';

// THIS COMPONENT IS FOR Updating ROUTE...

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}

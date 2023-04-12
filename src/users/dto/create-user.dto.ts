import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.ru', description: 'email'})
    @IsString({message: 'it should be a string'})
    @IsEmail({}, {message: "invalid email"})
    readonly email: string;
    
    @ApiProperty({example: '12324324', description: 'password'})
    @IsString({message: 'it should be a string'})
    @Length(4, 16, {message: 'min 4 max 16 password length'})
    readonly password: string;
}
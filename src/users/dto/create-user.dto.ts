import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.ru', description: 'email'})
    readonly email: string;
    @ApiProperty({example: '12324324', description: 'password'})
    readonly password: string;
}
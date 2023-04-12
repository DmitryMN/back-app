import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
    
    @ApiProperty({example: '1', description: 'userId'})
    readonly userId: string

    @ApiProperty({example: 'USER', description: 'user role'})
    readonly value: string

}
// import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    // @ApiProperty({example: 'Admin', description: ''})
    readonly value: string

    // @ApiProperty({example: 'inform', description: 'properties'})
    readonly description: string
}
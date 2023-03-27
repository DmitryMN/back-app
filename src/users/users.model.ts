import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs > {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'test@gmail.com', description: 'email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    @ApiProperty({example: '1223444', description: 'password'})
    password: string

    @ApiProperty({example: 'true', description: 'banned or not banned'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean
    
    @ApiProperty({example: 'spam', description: 'lock information'})
    @Column({type: DataType.STRING, unique: true, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}
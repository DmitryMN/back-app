import {Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

interface RoleCreationAttrs {
    value: string
    description: string
}

@Table({
    tableName: 'role',
    createdAt: false,
    updatedAt: false,
})
export class UserRoles extends Model<UserRoles, RoleCreationAttrs> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    userId: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    roleId: number
}
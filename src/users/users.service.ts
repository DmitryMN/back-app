import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

    async createUser(dto:  CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUser(id: string) {
        const user = await this.userRepository.findOne({where: {id}});
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async addRole(addRoleDto: AddRoleDto) {
        const user = await this.userRepository.findByPk(addRoleDto.userId);
        const role = await this.roleService.getRoleByValue(addRoleDto.value);
        if(user && role) {
            await user.$add('role', role.id);
            return addRoleDto;
        }
        throw new HttpException('user ao role not found', HttpStatus.NOT_FOUND);
    }
}

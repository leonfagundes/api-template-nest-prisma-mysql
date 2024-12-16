import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserUpdateDTO } from './dto/user-update.dto';


@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async create(data: UserCreateDTO) {
        const user = await this.prisma.users.create({
            data
        })
        return user
    }

    async findAll() {
        const users = await this.prisma.users.findMany()
        return users
    }

    async findById(id: number) {
        const user = await this.prisma.users.findUnique({
            where: { id }
        })
        return user
    }

    async delete(id: number) {
        const deletedUser = await this.prisma.users.delete({ 
            where: { id }
        })
        return deletedUser
    }

    async update(id: number, data: UserUpdateDTO) {
        return this.prisma.users.update({
          where: { id },
          data,
        });
      }
      
}

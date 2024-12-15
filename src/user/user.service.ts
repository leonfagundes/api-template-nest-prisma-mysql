import { Injectable } from '@nestjs/common';
import { userDTO } from './dto/userDTO';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async create (data: userDTO) {
        const user = await this.prisma.user.create({
            data
        })
        return user
    }

    async findAll() {
        const users = await this.prisma.user.findMany()
        return users
    }

    async findById(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })
        return user
    }

    async delete(id: number) {
        const deletedUser = await this.prisma.user.delete({ 
            where: { id }
        })
        return deletedUser
    }

    async update(id: number, data: Partial<userDTO>) {
        return this.prisma.user.update({
          where: { id },
          data,
        });
      }
      
}

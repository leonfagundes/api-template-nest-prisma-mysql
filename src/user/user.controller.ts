import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDTO } from './dto/userDTO';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: userDTO) {
        return this.userService.create(data)
    }

    @Get()
    async findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.userService.findById(Number(id))
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Partial<userDTO>) {
        return this.userService.update(Number(id), data)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.userService.delete(Number(id))
    }
}

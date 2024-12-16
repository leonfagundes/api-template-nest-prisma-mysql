import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Post, 
    Put, 
    UseGuards, 
    UsePipes 
  } from '@nestjs/common';
import { UsersService } from './users.service';
import { YupValidationPipe } from '../pipes/yup-validation.pipe';
import { UserCreateSchema } from '../pipes/validators/user-create.validator';
import { UserUpdateSchema } from '../pipes/validators/user-update.validator';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserUpdateDTO } from './dto/user-update.dto';
  
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async findAll() {
        return this.userService.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id') id: number) {
      return this.userService.findById(Number(id));
    }
  
    @Post()
    @UsePipes(new YupValidationPipe(UserCreateSchema))
    async create(@Body() data: UserCreateDTO) {
        return this.userService.create(data);
    }
  
    @Put(':id')
    @UsePipes(new YupValidationPipe(UserUpdateSchema))
    async update(@Param('id') id: number, @Body() data: UserUpdateDTO) {
        return this.userService.update(Number(id), data);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.userService.delete(Number(id));
    }
  }
  
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { AnySchema } from 'yup';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: AnySchema) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await this.schema.validate(value, { abortEarly: false });
    } catch (error) {
      throw new BadRequestException(error.errors);
    }
  }
}

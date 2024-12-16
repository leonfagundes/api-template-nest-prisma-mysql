import * as yup from 'yup';

export const UserUpdateSchema = yup.object({
  username: yup
    .string()
    .optional(),

  email: yup
    .string()
    .email('Email inválido')
    .optional(),
    
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .optional(),
});

import * as yup from 'yup';

export const UserCreateSchema = yup.object({
  username: yup
    .string()
    .required('O nome de usuário é obrigatório'),
  
  email: yup
    .string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

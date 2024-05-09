import * as yup from 'yup';

export const LoginAuth = yup.object({
  email: yup.string().email().required('Please Enter your Email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must have at least 8 characters'),
});

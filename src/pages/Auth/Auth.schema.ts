// src/components/MyForm/MyForm.schema.ts
import * as yup from 'yup';

export const loginFormSchema = yup.object({
    username: yup.string().required('El correo electrónico es obligatorio').email('Correo electrónico inválido'),
    password: yup.string().required('La contraseña es obligatoria')
});

export type LoginFormValues = yup.InferType<typeof loginFormSchema>;
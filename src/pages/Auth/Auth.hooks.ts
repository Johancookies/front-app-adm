// src/pages/Auth/Auth.hooks.ts
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema, LoginFormValues } from './Auth.schema';
import { AuthRequest } from '../../services/auth/auth.types';
import { authManager } from '../../services/auth/auth.manager';
import { profileManager } from '../../services/profile/profile.manager';
import { localStorageManager } from '../../managers/localStorage/localStorage.manager';

export const useAuth = () => {

    const methods = useForm<LoginFormValues>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {
            username: "athletic6@bodytechcorp.com",
            password: "Password2022*",
        }
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = async (payload: LoginFormValues) => {
        let req: AuthRequest = {
            ...payload,
            grant_type: 'password',
            client_id: import.meta.env.VITE_APP_CLIENT_ID,
            client_secret: import.meta.env.VITE_APP_CLIENT_SECRET,
            uuid_front: import.meta.env.VITE_APP_CLIENT_SECRET_UUID,
        }
        const { success, data, headers } = await authManager.getToken(req)
        if (!success || !headers) {
            localStorageManager.clearStorage();
            return;
        }
        localStorageManager.storeAppData(data, headers);
        const response = await profileManager.getProfile();
        console.log(response);

    };

    return { methods, handleSubmit, isSubmitting, isValid, onSubmit };
};
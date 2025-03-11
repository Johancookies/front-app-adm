import { Box, Button, Stack } from '@mui/material';
import { useAuth } from './Auth.hooks';
import { FormProvider } from 'react-hook-form';

import PasswordField from '../../components/PasswordField/PasswordField.component';
import { VpnKeyTwoTone } from '@mui/icons-material';
import TextField from '../../components/TextField/TextField.component';

const Auth: React.FC = () => {

    const { methods, handleSubmit, isSubmitting, isValid, onSubmit } = useAuth();

    return (
        <Box
            display="flex"
            justifyContent="center"
            height="100vh"
            alignItems="center"
        >
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={1} width="25rem">
                        <TextField
                            name="username"
                            label="Correo Electrónico"
                        />
                        <Box display="flex" gap={1}>
                            <PasswordField
                                name="password"
                                label="Contraseña"
                                type="password"
                            />
                            <Button
                                aria-label="Ingresa"
                                type="submit"
                                loading={isSubmitting}
                                disabled={!isValid}
                            >
                                <VpnKeyTwoTone />
                            </Button>
                        </Box>
                    </Stack>
                </form>
            </FormProvider>
        </Box>
    );
};

export default Auth;

import React from 'react';
import { TextField, IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { LockTwoTone, LockOpenTwoTone } from '@mui/icons-material';
import { Controller, useFormContext } from 'react-hook-form';

const PasswordField: React.FC<TextFieldProps> = (props) => {

    const { control } = useFormContext();
    const { name = "" } = props;

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    {...props}
                    type={showPassword ? 'text' : 'password'}
                    error={!!error}
                    helperText={error?.message}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Ver contraseña"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <LockOpenTwoTone /> : <LockTwoTone />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};

export default PasswordField;
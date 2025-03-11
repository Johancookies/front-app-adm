import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const TextField: React.FC<TextFieldProps> = (props) => {

    const { control } = useFormContext();
    const { name = "" } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <MUITextField
                    {...field}
                    {...props}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
};

export default TextField;
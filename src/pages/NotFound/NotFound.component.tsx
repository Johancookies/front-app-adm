import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFound: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Typography variant='h3' component="h2">
                404
            </Typography>
            <Typography variant="h5" component="h2">
                Página no encontrada
            </Typography>
        </Box>
    );
};

export default NotFound;
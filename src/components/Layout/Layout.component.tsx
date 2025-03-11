import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar.component';


const Layout: React.FC = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box sx={{ width: "100%", height: "100%" }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
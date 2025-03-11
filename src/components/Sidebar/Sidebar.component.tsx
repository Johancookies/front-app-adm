// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { IntegrationInstructionsTwoTone, ExitToAppTwoTone } from '@mui/icons-material';

const Sidebar: React.FC = () => {

    return (
        <Drawer
            open
            variant="permanent"
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                width: 240,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/landings">
                            <ListItemIcon>
                                <IntegrationInstructionsTwoTone color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Landings" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/auth">
                                <ListItemIcon>
                                    <ExitToAppTwoTone color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Cerrar sesión" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
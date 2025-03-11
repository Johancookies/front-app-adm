// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { IntegrationInstructionsTwoTone } from '@mui/icons-material';

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
        </Drawer>
    );
};

export default Sidebar;
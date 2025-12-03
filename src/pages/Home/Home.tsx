import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'

export default function Appbar() {
    return (
        <Box sx={{ mt: (theme) => theme.mixins.toolbar.minHeight }} >
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Meu App
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

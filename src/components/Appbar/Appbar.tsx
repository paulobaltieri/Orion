import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Appbar() {
    return (
        <Box sx={{ mt: (theme) => theme.mixins.toolbar.minHeight }} >
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Jiu-Jitsu Eventos
                    </Typography>
                    <Button color="inherit">Button</Button>
                    <Button color='inherit'>Button</Button>
                    <Button color='inherit'>Button</Button>
                    <Button color='inherit'>Button</Button>
                    <Button color='inherit'>Button</Button>
                    <Button color='inherit'>Button</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

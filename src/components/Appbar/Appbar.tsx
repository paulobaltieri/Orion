import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>

                    {/* Menu hambúrguer — aparece apenas no mobile */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Título */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Jiu-Jitsu Eventos
                    </Typography>

                    {/* Botões — aparecem apenas no desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Button color="inherit">Button</Button>
                        <Button color="inherit">Button</Button>
                        <Button color="inherit">Button</Button>
                        <Button color="inherit">Button</Button>
                        <Button color="inherit">Button</Button>
                        <Button color="inherit">Button</Button>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* Espaçador para não esconder o conteúdo atrás da AppBar */}
            <Toolbar />
        </Box>
    );
}

import { Box, CardMedia, Typography } from "@mui/material";
import videoHome from "../../assets/Video/videoHome.mp4";
import Button from "@mui/material/Button";
import { Flex } from "antd";

function Home() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Vídeo ocupando a tela */}
            <CardMedia
                component="video"
                src={videoHome}
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                }}
            />

            {/* Texto e botão na frente */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#fff",
                    textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
                    // pointerEvents: "none",  <-- REMOVIDO
                }}
            >
                <Typography variant="h2" fontWeight="bold">
                    Bem-vindo!
                </Typography>

                <Typography variant="h5" mt={2} mb={3}>
                    Jiu-Jitsu Eventos — Os melhores campeonatos
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="contained">Contained</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;

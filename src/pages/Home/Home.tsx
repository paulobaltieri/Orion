import { Box, CardMedia, Typography } from "@mui/material";
import videoHome from "../../assets/Video/videoHome.mp4";
import Button from "@mui/material/Button";

function Home() {
    // Texto presente na frente dos video
    const titleVideo = "Encontre todas as "
    const titleVideo2 = "Competições de Jiu-Jitsu em um só lugar"
    const subtitleVideo = "Jiu-Jitsu Eventos — Os melhores campeonatos"
    return (
        <Box
            sx={{
                width: "100vw",
                height: "90vh",
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
                    margin: "5px"
                    // pointerEvents: "none",  <-- REMOVIDO
                }}
            >
                <Typography variant="h3" fontWeight="bold">
                    <Box>{titleVideo}</Box>
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                    {titleVideo2}
                </Typography>
                <Typography variant="h5" mt={2} mb={3}>
                    {subtitleVideo}
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Button variant="contained" color="error">Proximos eventos</Button>
                    <Button variant="contained"
                        sx={{ backgroundColor: "#212121", border: "none", "&:focus": { outline: "nome" } }}
                    >Divulgue seu evento</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;

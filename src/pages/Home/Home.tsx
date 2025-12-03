import { Card, CardMedia } from "@mui/material"
import videoHome from "../../assets/Video/videoHome.mp4"

function Home() {
    return (
        <>
            <Card
                sx={{
                    width: "100%",
                    boxShadow: "none",
                    borderRadius: 0,
                }}
            >
                <CardMedia
                    component="video"
                    src={videoHome}
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                        width: "100%",
                        height: "90vh",
                        objectFit: "cover",
                    }}
                />
            </Card>
        </>
    )
}

export default Home

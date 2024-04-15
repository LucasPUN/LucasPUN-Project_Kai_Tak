
import { Grid, LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import modal1 from "../../../pic/modal1.jpg.webp";
import TopNavBar from "../../compoent/TopNavBar.tsx";

const images = [
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
];

export default function GeneratingPage() {
    const navigate = useNavigate();

    const handlePhotoClick = () => {
        navigate('/result');
    };

    return (
        <>
            <TopNavBar/>
            <Grid container>
                {/* girrvc div */}
                <Grid item xs={11}
                      sx={{position: 'sticky', top: 0, minHeight: '100vh', padding: 4, backgroundColor: '#202020'}}>
                    <TextField
                        variant="outlined"
                        placeholder="Enter your text here"
                        fullWidth
                        InputProps={{style: {color: "black"}}}
                        sx={{marginBottom: 2, backgroundColor: 'white'}}
                    />
                    <Button variant="contained" fullWidth sx={{marginBottom: 2}}>
                        Get Creative
                    </Button>

                    <Grid container justifyContent="center" alignItems="center">
                        <img src={modal1} alt={`sea image`} style={{width: '50%'}} onClick={handlePhotoClick}/>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ position: 'relative', padding: 4 }}>
                        {/* Progress bar */}
                        <LinearProgress sx={{ width: '100%', height: 10, position: 'absolute', top: 0, left: 0, zIndex: 9999, marginTop: "30px"}} />
                    </Grid>

                </Grid>

                <Grid item xs={1} sx={{position: 'relative', minHeight: '100vh', padding: 4}}>
                    {/* girrheader */}
                    <Grid item xs={12} sx={{marginBottom: 4}}>
                        <Typography variant="h5">最近的</Typography>
                    </Grid>
                    {/* Single column of images */}
                    {images.map((image, index) => (
                        <Grid key={index} item xs={12}>
                            <img src={image} alt={`sea image ${index + 1}`} style={{width: '100px'}}/>
                        </Grid>
                    ))}
                </Grid>



            </Grid>
        </>
    );
}
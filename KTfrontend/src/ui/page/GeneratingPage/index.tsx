
import { Grid, LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TopNavBar from "../../compoent/TopNavBar.tsx";

const images = [
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
    'https://via.placeholder.com/270',
];

export default function StableDiffusionPage() {
    return (
        <>
            <TopNavBar/>
            <Grid container>
                {/* girrvc div */}
                <Grid item xs={8}
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

                    <Grid container justifyContent="center" alignItems="center" sx={{ position: 'relative', minHeight: '100vh', padding: 4 }}>
                        {/* Progress bar */}
                        <LinearProgress sx={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 9999 }} />
                    </Grid>

                </Grid>

                <Grid item xs={4} sx={{position: 'relative', minHeight: '100vh', padding: 4}}>
                    {/* girrheader */}
                    <Grid item xs={12} sx={{marginBottom: 4}}>
                        <Typography variant="h5">最近的</Typography>
                    </Grid>
                    {/* Single column of images */}
                    {images.map((image, index) => (
                        <Grid key={index} item xs={12}>
                            <img src={image} alt={`sea image ${index + 1}`} style={{width: '100%'}}/>
                        </Grid>
                    ))}
                </Grid>



            </Grid>
        </>
    );
}
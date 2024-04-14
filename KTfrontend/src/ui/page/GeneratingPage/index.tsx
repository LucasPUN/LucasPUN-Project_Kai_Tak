import Box from "@mui/material/Box";

import DrawIcon from "@mui/icons-material/Draw";
import {Container, Grid, LinearProgress} from "@mui/material";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";
import TopNavBar from "../../compoent/TopNavBar.tsx";
//
// const images = [
//     {
//         url: modal1,
//         title: "Sports Avenue",
//         width: "70%",
//         onclick: 1,
//     },
//     {
//         url: modal2,
//         title: "Main Plaza",
//         width: "70%",
//         onclick: 2,
//     },
//     {
//         url: modal3,
//         title: "South Plaza",
//         width: "70%",
//         onclick: 3,
//     },
//     {
//         url: modal21,
//         title: "Main Stadium",
//         width: "70%",
//         onclick: 3,
//     },
// ];

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            // opacity: 0.15,
            opacity: 0.6, // Reduce opacity to 0.4
            backgroundColor: "rgba(0,0,0) ", // Grey background with opacity
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        //hover 出框
        "& .MuiTypography-root": {
            //  border: "4px solid currentColor",
            opacity: 1,
            color: "white",
        },
    },
}));
const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
});

const Image = styled("span")(({theme}) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.black,
}));
const ImageBackdrop = styled("span")(({theme}) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));

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
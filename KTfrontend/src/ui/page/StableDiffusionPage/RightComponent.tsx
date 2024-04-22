import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

interface ImageObject {
    title: string;
    url: string;
}

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

interface RightComponentProps {
    images: ImageObject[]; // Specify the type of the images prop
}

export default function RightComponent({images}: RightComponentProps) {

    return (
        <>
            <Grid
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                    gap: 1, // Gap between items
                    justifyContent: "center",
                    alignItems: "center", // Center the content vertically
                }}
            >
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: "35vw",
                            height: "35vh"
                        }}
                        // onClick={() => handleImageClick(image.onclick)}
                    >
                        <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                        <ImageBackdrop className="MuiImageBackdrop-root"/>
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: "relative",
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    opacity: 0,
                                }}
                            >
                                {image.title}
                                {/* <ImageMarked className="MuiImageMarked-root" /> */}
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Grid>

        </>
    )
} 
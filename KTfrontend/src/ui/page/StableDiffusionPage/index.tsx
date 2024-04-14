import Box from "@mui/material/Box";
import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";
import TopNavBar from "../../compoent/TopNavBar";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const images = [
    {
        url: modal1,
        title: "Sports Avenue",
        width: "70%",
        onclick: 1,
    },
    {
        url: modal2,
        title: "Main Plaza",
        width: "70%",
        onclick: 2,
    },
    {
        url: modal3,
        title: "South Plaza",
        width: "70%",
        onclick: 3,
    },
    {
        url: modal21,
        title: "Main Stadium",
        width: "70%",
        onclick: 3,
    },
];

export default function StableDiffusionPage() {
    return (
        <>
            <TopNavBar />
            <Box
                display="flex"
                alignItems="center"
                height="90vh"
                sx={{ backgroundColor: "#202020" }}
            >
                <Box>
                    <LeftComponent />
                </Box>
                <RightComponent images={images} />
            </Box>
        </>
    );
}


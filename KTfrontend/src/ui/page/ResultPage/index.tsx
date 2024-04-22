import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";
import {Box, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import TopNavBar from "../../compoent/TopNavBar.tsx";
import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';


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

export default function ResultPage() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const navigate = useNavigate();

    const handleSubmitClick = () => {
        navigate('/upload');
    };

    const handleSlideChange = (swiper: any) => {
        setCurrentSlideIndex(swiper.activeIndex);
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = images[currentSlideIndex].url;
        link.download = images[currentSlideIndex].title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <TopNavBar/>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                className="mySwiper"
                onSlideChange={handleSlideChange}
                modules={[EffectCoverflow, Pagination]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} style={{width: '50vw', height: '50vh'}}>
                        <img src={image.url} alt={image.title}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginLeft: '20px',
                    marginTop: '20px'
                }}
            >
                <Typography variant="h3">
                    {images[currentSlideIndex].title}
                </Typography>

                <Button variant="contained" color="primary" onClick={downloadImage}>
                    Download
                </Button>

                <Button variant="contained" color="primary" /* onClick={handleSubmit} */
                        style={{marginTop: '10px'}} onClick={handleSubmitClick}>
                    Submit
                </Button>
            </Box>
        </>
    );
}
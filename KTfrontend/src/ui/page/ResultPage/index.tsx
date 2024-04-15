import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";
import { useState } from "react";
import { Box, IconButton, Typography, Button, Grid, Container } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../../compoent/TopNavBar.tsx";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/upload');
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = images[currentImageIndex].url;
    link.download = images[currentImageIndex].title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <TopNavBar />
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: '100vh' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '20px', // Added gap between the image and buttons
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Use flexbox layout for image and buttons */}
              <IconButton onClick={handlePrevImage} color="primary">
                <ChevronLeftIcon />
              </IconButton>
              <img
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].title}
                style={{ maxWidth: '50%', maxHeight: '50%' }}
              />
              <IconButton onClick={handleNextImage} color="primary">
                <ChevronRightIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center', // Center align the text
                marginLeft: '20px', // Added margin to separate the image from the text/buttons
              }}
            >
              <Typography variant="h3">
                {images[currentImageIndex].title}
              </Typography>

              <Button variant="contained" color="primary" onClick={downloadImage}>
                Download
              </Button>

              <Button variant="contained" color="primary" /* onClick={handleSubmit} */
                style={{ marginTop: '10px' }} onClick={handleSubmitClick}>
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
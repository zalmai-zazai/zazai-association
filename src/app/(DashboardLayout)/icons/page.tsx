"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

interface GalleryItem {
  title: string;
  description: string;
  imageUrl: string;
}

// Sample data for the gallery
const galleryItems: GalleryItem[] = [
  {
    title: "Sunset Beach",
    description: "A beautiful view of the beach at sunset.",
    imageUrl: "images/products/1.jpg",
  },
  {
    title: "Mountain View",
    description: "The view from the top of the mountain during sunrise.",
    imageUrl: "images/products/5.jpg",
  },
  {
    title: "City Skyline",
    description: "The skyline of a modern city at night.",
    imageUrl: "images/products/2.jpg",
  },
  {
    title: "Forest Trail",
    description: "A peaceful walk through a forest trail.",
    imageUrl: "images/products/3.jpg",
  },
  {
    title: "Sunset Beach",
    description: "A beautiful view of the beach at sunset.",
    imageUrl: "images/products/1.jpg",
  },
  {
    title: "Mountain View",
    description: "The view from the top of the mountain during sunrise.",
    imageUrl: "images/products/5.jpg",
  },
  {
    title: "City Skyline",
    description: "The skyline of a modern city at night.",
    imageUrl: "images/products/2.jpg",
  },
  {
    title: "Forest Trail",
    description: "A peaceful walk through a forest trail.",
    imageUrl: "images/products/3.jpg",
  },
  {
    title: "Sunset Beach",
    description: "A beautiful view of the beach at sunset.",
    imageUrl: "images/products/1.jpg",
  },
  {
    title: "Mountain View",
    description: "The view from the top of the mountain during sunrise.",
    imageUrl: "images/products/5.jpg",
  },
  {
    title: "City Skyline",
    description: "The skyline of a modern city at night.",
    imageUrl: "images/products/2.jpg",
  },
  {
    title: "Forest Trail",
    description: "A peaceful walk through a forest trail.",
    imageUrl: "images/products/3.jpg",
  },
  {
    title: "Sunset Beach",
    description: "A beautiful view of the beach at sunset.",
    imageUrl: "images/products/1.jpg",
  },
  {
    title: "Mountain View",
    description: "The view from the top of the mountain during sunrise.",
    imageUrl: "images/products/5.jpg",
  },
  {
    title: "City Skyline",
    description: "The skyline of a modern city at night.",
    imageUrl: "images/products/2.jpg",
  },
  {
    title: "Forest Trail",
    description: "A peaceful walk through a forest trail.",
    imageUrl: "images/products/3.jpg",
  },
];

const HoverCard = styled(Card)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    // theme injected automatically
  },
}));

const Icons: React.FC = () => {
  return (
    <PageContainer title="Icons" description="this is Icons">
      <Box display={"flex"} justifyContent={"space-around"}>
        <Typography variant="h5" fontWeight="600" sx={{ textAlign: "left" }}>
          Gallery
        </Typography>
        <Typography variant="h5" fontWeight="600" sx={{ textAlign: "right" }}>
          نندارتون
        </Typography>
      </Box>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <HoverCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </HoverCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <DashboardCard title="Icons">
        <Typography>Gallery Comming soon</Typography> */}
      {/* <iframe src="https://tabler-icons.io/"  title="Inline Frame Example" frameBorder={0}
    width="100%"
    height="650"></iframe> */}
      {/* </DashboardCard> */}
    </PageContainer>
  );
};

export default Icons;

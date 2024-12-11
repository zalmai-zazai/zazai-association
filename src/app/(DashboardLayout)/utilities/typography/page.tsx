"use client";
import { Typography, Grid, CardContent, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import RegulationFirst from "../../components/dashboard/RegulationFirst";
import RegulationSecond from "../../components/dashboard/RegulationSecond";

const TypographyPage = () => {
  return (
    <PageContainer title="Typography" description="this is Typography">
      <Box display={"flex"} justifyContent={"space-around"}>
        <Typography variant="h5" fontWeight="600" sx={{ textAlign: "left" }}>
          Regulations
        </Typography>
        <Typography variant="h5" fontWeight="600" sx={{ textAlign: "right" }}>
          طرزالعمالونه
        </Typography>
      </Box>

      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <RegulationSecond />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RegulationFirst />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <RegulationSecond />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RegulationFirst />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <RegulationSecond />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RegulationFirst />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <RegulationSecond />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RegulationFirst />
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TypographyPage;

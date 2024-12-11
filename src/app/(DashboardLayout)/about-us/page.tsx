"use client";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import YearlyBreakup from "../components/dashboard/YearlyBreakup";
import MonthlyEarnings from "../components/dashboard/MonthlyEarnings";
import ProductPerformance from "../components/dashboard/ProductPerformance";
import Blog from "../components/dashboard/Blog";
import AboutFirst from "../components/dashboard/AboutFirst";

import AboutThird from "../components/dashboard/AboutThird";
import AboutSecond from "../components/dashboard/AboutSecond";

const AboutUs: React.FC = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Box display={"flex"} justifyContent={"space-around"} mb={3}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          About Zazai Association
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          د ځاځیو ټولنی په اړه
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AboutFirst />
              </Grid>
              <Grid item xs={12}>
                <AboutSecond />
              </Grid>
              <Grid item xs={12}>
                <AboutThird />
              </Grid>
              <Grid item xs={12}>
                <AboutThird />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid> */}

          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;

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

const Payment: React.FC = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Box display={"flex"} justifyContent={"space-around"} mb={3}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Payments
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          پرداختونه
        </Typography>
      </Box>
    </Container>
  );
};

export default Payment;

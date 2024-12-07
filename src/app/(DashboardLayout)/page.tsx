"use client";
import { Grid, Box, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the types for the member data
interface Member {
  paidamount: number; // Ensure the paidamount is a number
}

const Dashboard = () => {
  const [data, setData] = useState<Member[]>([]); // Use the Member type
  const [totalPaidAmount, setTotalPaidAmount] = useState<number>(0); // totalPaidAmount is a number

  const fetchData = async () => {
    try {
      const response = await axios.get("api/member");
      console.log(response);
      const fetchedData: Member[] = response.data.data; // Ensure the data is typed as Member[]
      setData(fetchedData);

      // Calculate total paid amount
      const total = fetchedData.reduce((sum, member) => {
        return sum + (member.paidamount || 0); // Add the paidamount, default to 0 if it's undefined
      }, 0);

      setTotalPaidAmount(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box display={"flex"} justifyContent={"space-around"} mb={3}>
        <Typography variant="h3" fontWeight="700" color={"orange"} mb={1}>
          Seattle Zazai Association
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid> */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup totalPaidAmount={totalPaidAmount} />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings totalPaidAmount={totalPaidAmount} />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid> */}
          <Grid item xs={12} lg={8}>
            <ProductPerformance data={data} />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;

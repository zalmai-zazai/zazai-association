import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";

import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const YearlyBreakup = ({ totalPaidAmount }) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const successlight = theme.palette.success.light;

  function calculatePercentage(amount: number, total: number = 10000): number {
    if (total === 0) return 0; // Avoid division by zero
    return (amount / total) * 100;
  }
  const amount = 800; // Example amount
  const percentage = calculatePercentage(totalPaidAmount);

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, "#F9F9FD"],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  // const seriescolumnchart: any = [percentage, 40, 100 - percentage];
  const seriescolumnchart: any = [percentage, 100 - percentage];

  return (
    <DashboardCard title="Total Budget">
      <>
        <Typography variant="h6" fontWeight="600" mb={1}>
          ټوله بودیجه
        </Typography>

        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={7} sm={7}>
            <Typography variant="h3" fontWeight="700">
              ${totalPaidAmount}
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconArrowUpLeft width={20} color="#39B69A" />
              </Avatar>
              <Typography variant="subtitle2" fontWeight="600">
                +{percentage}%
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                last year
              </Typography>
            </Stack>
            <Stack spacing={3} mt={5} direction="row">
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: primary,
                    svg: { display: "none" },
                  }}
                ></Avatar>
                <Typography variant="subtitle2" color="textSecondary">
                  2024
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: primarylight,
                    svg: { display: "none" },
                  }}
                ></Avatar>
                <Typography variant="subtitle2" color="textSecondary">
                  2025
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* column */}
          <Grid item xs={5} sm={5}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="donut"
              height={150}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </>
    </DashboardCard>
  );
};

export default YearlyBreakup;

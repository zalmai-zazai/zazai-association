import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";

import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const AboutSecond = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const successlight = theme.palette.success.light;

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
  const seriescolumnchart: any = [38, 40, 25];

  return (
    <DashboardCard>
      <>
        <Box display={"flex"} justifyContent={"space-around"} mb={3}>
          <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
            Our Mission
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
            زموږ ماموریت
          </Typography>
        </Box>

        {/* column */}
        <Grid item xs={12} sm={12}>
          <Typography sx={{ textAlign: "right" }} variant="body1" paragraph>
            د ځاځی ټولنې ماموریت د افغان کډوالو د ژوند شرایطو ښه کول دي. موږ د
            خپلو غړو لپاره تعلیمي ورکشاپونه، روزنیز پروګرامونه او ټولنیز ملاتړ
            چمتو کوو.
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
            Zazai Association is a non-profit organization based in Seattle,
            aimed at supporting zazai members. Our mission is to create a strong
            and supportive environment for our members, where they can receive
            help in overcoming the challenges of resettlement and create better
            opportunities for their future. Our community focuses on providing
            education, healthcare, and job opportunities to our members.
          </Typography>
          <img
            src="images/products/1.jpg"
            alt="Community Image"
            style={{
              maxWidth: "100%",
              marginTop: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        {/* column */}
      </>
    </DashboardCard>
  );
};

export default AboutSecond;

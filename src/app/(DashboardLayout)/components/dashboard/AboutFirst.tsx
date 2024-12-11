import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";

import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const AboutFirst = () => {
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
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={12} sm={12}>
          <Typography
            sx={{ textAlign: "right", marginTop: 2 }}
            variant="body1"
            paragraph
          >
            ځاځی ټولنه په سیاټل کې یوه غیر انتفاعي ټولنه ده چې د افغان کډوالو
            ملاتړ لپاره جوړ شوې ده. زموږ موخه دا ده چې د وګړو لپاره یو پیاوړی او
            ملاتړ کونکی چاپیریال رامنځته کړو، چې پکې هغوی کولی شي د خپلو وګړو
            ستونزو حلولو کې مرسته وکړي او د خپل راتلونکي لپاره غوره امکانات
            رامنځته کړي. زموږ ټولنه د تعلیم، صحي پاملرنې، او د کاري فرصتونو په
            برخه کې وګړو ته لا زیاته مرسته ورکوي.
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
            src="images/products/3.jpg"
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
      </Grid>
    </DashboardCard>
  );
};

export default AboutFirst;

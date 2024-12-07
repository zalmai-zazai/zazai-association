import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const AboutUs: React.FC = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={5}>
        {/* Left side - Pashto text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "right", padding: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="primary">
              د ځاځیو ټولنی په اړه
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
              ځاځی ټولنه په سیاټل کې یوه غیر انتفاعي ټولنه ده چې د افغان کډوالو
              ملاتړ لپاره جوړ شوې ده. زموږ موخه دا ده چې د وګړو لپاره یو پیاوړی
              او ملاتړ کونکی چاپیریال رامنځته کړو، چې پکې هغوی کولی شي د خپلو
              وګړو ستونزو حلولو کې مرسته وکړي او د خپل راتلونکي لپاره غوره
              امکانات رامنځته کړي.
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
              زموږ ټولنه د تعلیم، صحي پاملرنې، او د کاري فرصتونو په برخه کې وګړو
              ته لا زیاته مرسته ورکوي.
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
              زموږ ماموریت
            </Typography>
            <Typography variant="body1" paragraph>
              د ځاځی ټولنې ماموریت د افغان کډوالو د ژوند شرایطو ښه کول دي. موږ د
              خپلو غړو لپاره تعلیمي ورکشاپونه، روزنیز پروګرامونه او ټولنیز ملاتړ
              چمتو کوو.
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
              زموږ لید
            </Typography>
            <Typography variant="body1" paragraph>
              موږ غواړو چې په ټولنیز او اقتصادي برخو کې وګړو ته د پرمختګ فرصتونه
              برابر کړو. زموږ هدف د وګړو په ژوند کې مثبت بدلون راوستل دي.
            </Typography>
          </Box>
        </Grid>

        {/* Right side - English text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left", padding: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="primary">
              About Zazai Association
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
              Zazai Association is a non-profit organization based in Seattle,
              aimed at supporting zazai members. Our mission is to create a
              strong and supportive environment for our members, where they can
              receive help in overcoming the challenges of resettlement and
              create better opportunities for their future.
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
              Our community focuses on providing education, healthcare, and job
              opportunities to our members.
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              The mission of Zazai Association is to improve the living
              conditions of members. We provide educational workshops, training
              programs, and community support for our members.
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ marginTop: 3 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              We aim to provide our members refugees with opportunities for
              social and economic advancement. Our vision is to create positive
              change in the lives of our members.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;

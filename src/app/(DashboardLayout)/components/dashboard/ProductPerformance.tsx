import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

// Dynamically import all images from the public/profile folder
const avatarImages: { [key: string]: string } = {
  zalmai: "/images/profile/Zalmai.jpg",
  akhtar: "/images/profile/Akhtar.jpg",
  aman: "/images/profile/Aman.jpg",
  alam: "/images/profile/Alam.jpg",
  dawood: "/images/profile/Dawood.jpg",
  faizMohammad: "/images/profile/FaizMohammad.jpg",
  hamid: "/images/profile/Hamid.jpg",
  haroon: "/images/profile/Haroon.jpg",
  hizbullah: "/images/profile/Hizbullah.jpg",
  ismail: "/images/profile/Ismail.jpg",
  javid: "/images/profile/Javid.jpg",
  lajbar: "/images/profile/Lajbar.jpg",
  malik: "/images/profile/Malik.jpg",
  mohammadullah: "/images/profile/Mohammadullah.jpg",
  mustafa: "/images/profile/Mustafa.jpg",
  najibullah: "/images/profile/Najibullah.jpg",
  abdulqayoum: "/images/profile/Qayoum.jpg",
  tahir: "/images/profile/Tahir.jpg",

  // Add more images here manually, matching the names of members
};

// Define the types for member data
interface Member {
  _id: string;
  firstname: string;
  lastname: string;
  job: string;
  paidamount: number;
}

interface ProductPerformanceProps {
  data: Member[];
}

const ProductPerformance = ({ data }: ProductPerformanceProps) => {
  // Function to find the matching avatar based on the firstname
  const getAvatarImage = (firstname: string): string => {
    const formattedName = firstname.trim().replace(/\s+/g, "").toLowerCase();
    return avatarImages[formattedName] || "/images/profile/default.png";
  };

  return (
    <DashboardCard>
      <>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5" fontWeight="600" sx={{ textAlign: "left" }}>
            Members List
          </Typography>
          <Typography variant="h5" fontWeight="600" sx={{ textAlign: "right" }}>
            دغړو لیست
          </Typography>
        </Box>
        <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Avatar
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Job
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Family Members
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Amount Paid $
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((member) => (
                <TableRow key={member._id}>
                  <TableCell>
                    {/* <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                      {member._id.slice(-4)}
                    </Typography> */}
                    <Avatar
                      alt={`${member.firstname} ${member.lastname}`}
                      src={getAvatarImage(member.firstname)} // Match image with member's firstname
                      sx={{ width: 70, height: 70 }} // Set the size of the avatar
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {member.firstname}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{ fontSize: "13px" }}
                        >
                          {member.lastname}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {member.job}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      sx={{
                        px: "8px", // Adjust padding for a larger appearance
                        fontSize: "16px", // Customize font size for larger text
                        bgcolor: "orange", // Use bgcolor instead of pbg
                        color: "white",
                      }}
                      size="medium" // Keep size as "medium" or "small"
                      label={2}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">${member.paidamount}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </>
    </DashboardCard>
  );
};

export default ProductPerformance;

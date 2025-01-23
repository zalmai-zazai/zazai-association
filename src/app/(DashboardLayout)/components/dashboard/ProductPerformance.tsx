import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import axios from "axios";
import { avatarImages } from "@/utils/avatarImages";

// Dynamically import all images from the public/profile folder
// const avatarssImages: { [key: string]: string } = {
//   zalmai: "/images/profile/Zalmai.jpg",
//   akhtar: "/images/profile/Akhtar.jpg",
//   aman: "/images/profile/Aman.jpg",
//   alam: "/images/profile/Alam.jpg",
//   dawood: "/images/profile/Dawood.jpg",
//   faizMohammad: "/images/profile/Faiz.jpg",
//   hamid: "/images/profile/Hamid.jpg",
//   haroon: "/images/profile/Haroon.jpg",
//   hizbullah: "/images/profile/Hizbullah.jpg",
//   ismail: "/images/profile/Ismail.jpg",
//   javid: "/images/profile/Javid.jpg",
//   lajbar: "/images/profile/Lajbar.jpg",
//   malik: "/images/profile/Malik.jpg",
//   mohammadullah: "/images/profile/Mohammadullah.jpg",
//   mustafa: "/images/profile/Mustafa.jpg",
//   najibullah: "/images/profile/Najibullah.jpg",
//   abdulqayoum: "/images/profile/Qayoum.jpg",
//   tahir: "/images/profile/Tahir.jpg",
// };

interface Member {
  _id: string;
  firstname: string;
  lastname: string;
  job: string;
  paidamount: number;
  email: string;
  homeaddress: string;
  familymembers: number;
  date: string;
}

interface ProductPerformanceProps {
  data: Member[];

  admin: Boolean;
}

const ProductPerformance = ({
  data,

  admin,
}: ProductPerformanceProps) => {
  const [members, setMembers] = useState<Member[]>(data);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Function to find the matching avatar based on the firstname
  const getAvatarImage = (firstname: string): string => {
    const formattedName = firstname.trim().replace(/\s+/g, "").toLowerCase();
    return avatarImages[formattedName] || "/images/profile/default.png";
  };

  // Handle click to show detailed member information in the dialog
  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteMember = async () => {
    if (!selectedMember) return;

    try {
      const response = await axios.delete("/api/member", {
        data: { id: selectedMember._id },
      });

      if (response.status === 200) {
        toast.success(response.data.message);

        // Update the members state to reflect the deletion
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member._id !== selectedMember._id)
        );

        setOpenDialog(false); // Close dialog after delete
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error("Error deleting member. Please try again.");
    }
  };

  // const handleEdit = () => {
  //   if (selectedMember) {
  //     onEdit(selectedMember); // Trigger the edit handler passed in props
  //     handleCloseDialog();
  //   }
  // };
  useEffect(() => {
    setMembers(data);
  }, [data]);
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
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
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
              {members.map((member) => (
                <TableRow key={member._id}>
                  <TableCell>
                    <Avatar
                      alt={`${member.firstname} ${member.lastname}`}
                      src={getAvatarImage(member.firstname)} // Match image with member's firstname
                      sx={{ width: 70, height: 70, cursor: "pointer" }} // Set the size of the avatar
                      onClick={() => handleMemberClick(member)} // Open dialog on click
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      onClick={() => handleMemberClick(member)}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
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
                        px: "8px",
                        fontSize: "16px",
                        bgcolor: "orange",
                        color: "white",
                      }}
                      size="medium"
                      label={member.familymembers}
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

        {/* Dialog for member details */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{ textAlign: "center" }}>Member Details</DialogTitle>

          {selectedMember && (
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingX: 5,
              }}
            >
              <Avatar
                alt={`${selectedMember.firstname} ${selectedMember.lastname}`}
                src={getAvatarImage(selectedMember.firstname)} // Match image with member's firstname
                sx={{ width: 150, height: 150, marginBottom: 2 }} // Set the size of the avatar and margin bottom for spacing
                onClick={() => handleMemberClick(selectedMember)} // Open dialog on click
              />

              <Box sx={{ padding: 1, textAlign: "left", marginBottom: 2 }}>
                <Typography variant="h5" sx={{ marginBottom: 1 }}>
                  {selectedMember.firstname} {selectedMember.lastname}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Job: {selectedMember.job}
                </Typography>
                <Typography variant="body1">
                  Email: {selectedMember.email}
                </Typography>
                <Typography variant="body1">
                  Home Address: {selectedMember.homeaddress}
                </Typography>
                <Typography variant="body1">
                  Family Members: {selectedMember.familymembers}
                </Typography>
                <Typography variant="body1">
                  Date: {new Date(selectedMember?.date).toLocaleDateString()}{" "}
                  {/* Format the date */}
                </Typography>
                <Typography sx={{ paddingY: 1 }} variant="h6">
                  Amount Paid: ${selectedMember.paidamount}
                </Typography>
              </Box>
            </DialogContent>
          )}

          <DialogActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
            {
              <Button
                disabled={!admin}
                onClick={handleDeleteMember}
                color="secondary"
              >
                Delete
              </Button>
            }
          </DialogActions>
        </Dialog>
      </>
    </DashboardCard>
  );
};

export default ProductPerformance;

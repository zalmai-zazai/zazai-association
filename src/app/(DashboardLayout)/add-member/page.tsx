"use client";
import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Logo } from "react-mui-sidebar";
import AuthRegister from "@/app/authentication/auth/AuthRegister";
import BlankCard from "../components/shared/BlankCard";
import CustomTextField from "../components/forms/theme-elements/CustomTextField";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SamplePage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [homeaddress, setHomeAddress] = useState("");
  const [job, setJob] = useState("");
  const [paidamount, setPaidAmount] = useState("");
  const [message, setMessage] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("isAdmin");
    if (storedUser) {
      setAdmin(JSON.parse(storedUser));
    }
  }, []);

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("api/member", {
      firstname,
      lastname,
      email,
      homeaddress,
      job,
      paidamount: Number(paidamount),
    });

    try {
      if (response.data.status === 201) {
        setMessage(response.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setHomeAddress("");
        setJob("");
        setPaidAmount("");
        toast.success(response.data.message);
      } else if (response.data.status === 400) {
        setMessage(response.data.message);
        toast.error(message);
      }
    } catch (error) {
      console.log("Erro adding member", error);
      setMessage(response.data.message);
      toast.error(message);
    }
  };
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Add member">
        <>
          {!admin ? (
            <Typography>Only admin can add members</Typography>
          ) : (
            <>
              <Typography>Please enter all the details for member</Typography>
              <form onSubmit={handelSubmit}>
                <Box
                  mt={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Stack mb={3} flex={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="fname"
                      mb="5px"
                    >
                      First Name
                    </Typography>
                    <CustomTextField
                      value={firstname}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                      }
                      id="fname"
                      variant="outlined"
                      fullWidth
                      required
                    />

                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="email"
                      mb="5px"
                      mt="25px"
                    >
                      Email Address
                    </Typography>
                    <CustomTextField
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      id="email"
                      variant="outlined"
                      fullWidth
                      required
                    />

                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="job"
                      mb="5px"
                      mt="25px"
                    >
                      Job
                    </Typography>
                    <CustomTextField
                      value={job}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setJob(e.target.value)
                      }
                      id="job"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack mb={3} ml={2} flex={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="lname"
                      mb="5px"
                    >
                      Last Name
                    </Typography>
                    <CustomTextField
                      value={lastname}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                      }
                      id="lname"
                      variant="outlined"
                      fullWidth
                      required
                    />

                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="homeAddress"
                      mb="5px"
                      mt="25px"
                    >
                      Home Address
                    </Typography>
                    <CustomTextField
                      value={homeaddress}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setHomeAddress(e.target.value)
                      }
                      id="homeAddress"
                      variant="outlined"
                      fullWidth
                      required
                    />

                    <Typography
                      variant="subtitle1"
                      fontWeight={200}
                      component="label"
                      htmlFor="amount"
                      mb="5px"
                      mt="25px"
                    >
                      Paid Amount $
                    </Typography>
                    <CustomTextField
                      type="number"
                      value={paidamount}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPaidAmount(e.target.value)
                      }
                      id="amount"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Stack>
                </Box>

                <Box display={"flex"} justifyContent={"space-between"}>
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Add
                  </Button>
                  {/* {message ? (
                    <Alert variant="standard" color="info">
                      {message!}
                    </Alert>
                  ) : (
                    ""
                  )} */}
                </Box>
              </form>
            </>
          )}
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

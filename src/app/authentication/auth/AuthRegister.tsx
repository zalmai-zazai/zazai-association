"use client";
import React, { ChangeEvent, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { Stack } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/navigation";

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messageResponse, setMessageResponse] = useState("");
  const router = useRouter();

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("../api/signup", {
        username,
        email,
        password,
      });
      if (response.data.status === 201) {
        router.push("/authentication/login");
      }
      setMessageResponse(response.data.message);
    } catch (error) {
      return console.log("connection problem", error);
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <form onSubmit={handelSubmit}>
        <Box>
          <Stack mb={3}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="name"
              mb="5px"
            >
              Name
            </Typography>
            <CustomTextField
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              id="name"
              variant="outlined"
              fullWidth
              required
            />

            <Typography
              variant="subtitle1"
              fontWeight={600}
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
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
              mt="25px"
            >
              Password
            </Typography>
            <CustomTextField
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              id="password"
              variant="outlined"
              fullWidth
              required
            />
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            Sign Up
          </Button>

          <Box className="mt-6">
            <Typography
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "red",
              }}
            >
              {messageResponse}
            </Typography>
          </Box>
        </Box>
      </form>
      {subtitle}
    </>
  );
};

export default AuthRegister;

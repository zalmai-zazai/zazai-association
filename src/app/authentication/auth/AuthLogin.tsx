import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("../api/login", { email, password });
      setResponseMessage(response.data.message);
      if (response.data.message === "success") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
        console.log(response.data.user);
      }
    } catch (error) {
      return NextResponse.json({ message: "Can not find the route" });
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
        <Stack>
          <Box>
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
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            href=""
            type="submit"
          >
            Sign In
          </Button>
        </Box>
        <Box className="mt-6">
          <Typography
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "red",
            }}
          >
            {responseMessage}
          </Typography>
        </Box>
      </form>
      {subtitle}
    </>
  );
};

export default AuthLogin;

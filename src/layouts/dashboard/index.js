import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[12],
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "100%",
          }}
          alignItems={"center"}
        >
          {/* Icon of the app */}
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt={"Loading Img..."} />
          </Box>
          {/* This are the some buttons in navigation bar of the app */}
          <Stack
            sx={{ width: "max-content", height: "max-content" }}
            direction={"column"}
            spacing={3}
          >
            {Nav_Buttons.map((item) => (
              <IconButton key={item.index}>{item.icon}</IconButton>
            ))}
            {/* This is section divider */}
            <Divider />
            <IconButton>
              <Gear size={28} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;

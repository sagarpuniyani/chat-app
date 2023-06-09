import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";
import useSettings from "../../hooks/useSettings";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#7635DC' : '#7635DC',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#7635DC',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#828282' : '#7635DC',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


const DashboardLayout = () => {
  const [selected, setSelected] = React.useState(0);
  const theme = useTheme();
  console.log(theme);
  const {onToggleMode} = useSettings();

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
          justifyContent={"space-between"}
          spacing={2}
          sx={{
            height: "100%",
          }}
          alignItems={"center"}
        >
          <Stack
          direction="column"
          alignItems={"center"}
          sx={{
           height : "100%",
          }} 
          spacing={3}
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
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((item) =>
              item.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "white",
                    }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(item.index)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode=== "light" ? "black" : theme.palette.text.primary,
                  }}
                  key={item.index}
                >
                  {item.icon}
                </IconButton>
              )
            )}

            {/* This is section divider */}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: "white",
                  }}
                >
                  <Gear size={28} />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  color: theme.palette.mode=== "light" ? "black" : theme.palette.text.primary,
                }}
                onClick={() => setSelected(3)}
              >
                <Gear size={28} />
              </IconButton>
            )}
          </Stack>
          </Stack>


          {/* this is the dummy avatar */}
          <Stack
          spacing={4}
          >
          {/*SWITCH */}

          <IOSSwitch 
          onChange={()=>{
            onToggleMode();
          }}
          />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;

import { Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const [selected, setSelected] = Nav_Buttons.useState(0);
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
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((item) =>
              item.index === selected ? (
                <Box
                  sx={{
                    borderRadius: 1.5,
                    backgroundColor: theme.palette.primary.main,
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
                    color: "black",
                  }}
                  key={item.index}
                >
                  {item.icon}
                </IconButton>
              )
            )}

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

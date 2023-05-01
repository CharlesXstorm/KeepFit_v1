import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import style from "./SharedComponents.module.css";

function SharedComponent() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{
          gap: { lg: "122px", sm: "82px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px={"20px"}
      >
        <Link to="/" className={`${style.link} ${style.brand}`}>
          KeepFit
        </Link>
        <Stack
          direction={"row"}
          gap={"40px"}
          alignItems={"flex-end"}
          fontSize={"20px"}
          sx={{ fontSize: { lg: "22px", sm: "20px" } }}
        >
          <Link to="/" className={`${style.link} ${style.active}`}>
            Home
          </Link>
          <a href="#exercises" className={style.link}>
            Exercises
          </a>
        </Stack>
      </Stack>

      <Outlet />
      <Box mt={"20px"} padding={"40px"} bgcolor={"#d1d1d1"}>
        <Typography
          variant="h6"
          textTransform={"capitalize"}
          textAlign={"center"}
        >
          Made with ❤️ by xstorm
        </Typography>
      </Box>
    </>
  );
}

export default SharedComponent;

import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";
import style from "./BodyParts.module.css";

const BodyParts = ({ item, bodyPart, setBodyPart, setExercises }) => {
  return (
    <Stack
      type={"button"}
      justifyContent={"center"}
      alignItems={"center"}
      className={style.btn}
      sx={{
        borderTop: item === bodyPart ? "4px solid #FF1212" : "",
        padding: "10px",
        cursor: "pointer",
        gap: "47px",
        width: { lg: "270px", xs: "170px" },
        height: { lg: "280px", xs: "180px" },
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={icon} alt="dumbell" width={"80px"} height={"80px"} />
      <Typography
        fontSize={"24px"}
        fontWeight={"bold"}
        alignSelf={"center"}
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;

import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import bodyPartIcon from "../assets/icons/body-part.png";
import equipmentIcon from "../assets/icons/equipment.png";
import targetIcon from "../assets/icons/target.png";

const Detail = ({ name, bodyPart, equipment, gifUrl, target }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ flexDirection: { lg: "row" }, gap: { lg: "180px", xs: "40px" } }}
      mt={"20px"}
      padding={"40px"}
    >
      <Box sx={{ width: { lg: "50%", xs: "100%" } }}>
        <img src={gifUrl} alt="img" width={"100%"} />
      </Box>
      <Stack>
        <Typography
          variant="h4"
          mb="40px"
          justifyContent={"center"}
          alignItems={"center"}
          textTransform={"capitalize"}
        >
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        <Stack mt={"40px"} gap={"20px"} direction={"row"} alignItems={"center"}>
          <img src={bodyPartIcon} alt="icon" />
          <Typography variant="h6">{bodyPart}</Typography>
        </Stack>
        <Stack mt={"40px"} gap={"20px"} direction={"row"} alignItems={"center"}>
          <img src={targetIcon} alt="icon" />
          <Typography variant="h6">{target}</Typography>
        </Stack>
        <Stack mt={"40px"} gap={"20px"} direction={"row"} alignItems={"center"}>
          <img src={equipmentIcon} alt="icon" />
          <Typography variant="h6">{equipment}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;

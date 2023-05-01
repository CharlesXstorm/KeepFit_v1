import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ id, name, exerciseVideos }) => {
  return (
    <Box id={id} mt={"40px"} p={"40px"}>
      <Typography variant="h4">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexWrap={"wrap"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "20px" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box sx={{ width: { lg: "300px", xs: "100%" }, marginTop: "40px" }}>
              <img
                src={item.video.thumbnails[0].url}
                width={"100%"}
                alt={item.video.title}
              />
              <Typography color={"#000"} mt={"10px"}>
                {item.video.title.length >= 35
                  ? item.video.title.slice(0, 25) + "....."
                  : item.video.title}
              </Typography>
              <Typography color={"#000"} mt={"10px"}>
                {item.video.channelName.length >= 35
                  ? item.video.channelName.slice(0, 25) + "....."
                  : item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

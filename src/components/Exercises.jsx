import React, { useState } from "react";
import { Box, Stack, Pagination, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <Box padding={"20px"} id="exercises">
      <Typography variant="h4" mb="45px">
        {bodyPart === "all"
          ? "Showing All Results"
          : `Showing Results for ${bodyPart}`}
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        sx={{ gap: { lg: "100px", xs: "10px" } }}
      >
        {currentExercises.map((item, index) => (
          <ExerciseCard
            key={item.id}
            name={item.name}
            img={item.gifUrl}
            id={item._id}
            bodyPart={item.bodyPart}
            target={item.target}
          />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;

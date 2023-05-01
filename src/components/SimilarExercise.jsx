import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const SimilarExercise = ({
  targetMuscleExercises,
  equipmentExercises,
  targetMuscle,
  equipment,
}) => {
  const targetLength = targetMuscleExercises.length;
  const targetRand = Math.floor(Math.random() * targetLength);

  const equipmentLength = equipmentExercises.length;
  const equipmentRand = Math.floor(Math.random() * equipmentLength);
  // console.log(targetMuscleExercises.length);
  return (
    <Box mt={"20px"}>
      <Stack p={"40px"}>
        <Typography variant="h4">
          Similar{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {targetMuscle}
          </span>{" "}
          exercises
        </Typography>
        <Stack
          sx={{
            flexWrap: { lg: "wrap" },
            flexDirection: { lg: "row" },
            gap: { lg: "120px", xs: "20px" },
          }}
          mt={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {targetMuscleExercises
            ?.slice(
              targetRand,
              targetRand + 3 <= targetLength ? targetRand + 3 : targetRand - 3
            )
            .map((item) => (
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
      </Stack>

      <Stack p={"40px"}>
        <Typography variant="h4">
          Similar{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {`${equipment} equipment`}
          </span>{" "}
          exercises
        </Typography>
        <Stack
          sx={{
            flexWrap: { lg: "wrap" },
            flexDirection: { lg: "row" },
            gap: { lg: "120px", xs: "20px" },
          }}
          mt={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {equipmentExercises
            ?.slice(
              equipmentRand,
              equipmentRand + 3 <= equipmentLength
                ? equipmentRand + 3
                : equipmentRand - 3
            )
            .map((item) => (
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
      </Stack>
    </Box>
  );
};

export default SimilarExercise;

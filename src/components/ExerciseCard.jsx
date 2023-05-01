import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./ExerciseCard.module.css";

const ExerciseCard = ({ name, img, id, bodyPart, target }) => {
  return (
    <Link
      to={`/exercise/${id}`}
      className={style.link}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={img} alt="card" loading="lazy" width={"280px"} />
      <Stack direction={"row"} gap={"40px"}>
        <Button
          sx={{
            borderRadius: "20px",
            backgroundColor: "#ffa9a9",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>

        <Button
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fcc757",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>

      <Typography
        ml="20px"
        mt={"20px"}
        fontWeight={"bold"}
        fontSize={"15px"}
        color={"#000"}
        width={"200px"}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

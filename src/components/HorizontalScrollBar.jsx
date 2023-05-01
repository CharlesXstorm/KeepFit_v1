import React, { useContext } from "react";
import { Typography } from "@mui/material";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import prev from "../assets/icons/prev.png";
import next from "../assets/icons/next.png";

const PrevBtn = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} mt="20px">
      <img src={prev} alt="prev" width={"50px"} />
    </Typography>
  );
};

const NextBtn = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} mt="20px">
      <img src={next} alt="prev" width={"50px"} />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, setExercises }) => {
  return (
    <ScrollMenu LeftArrow={PrevBtn} RightArrow={NextBtn}>
      {data.map((el) => (
        <BodyParts
          key={el}
          itemId={el || el.id}
          item={el}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
        />
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;

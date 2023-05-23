import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import axios from "axios";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  useEffect(() => {
    const fetch = async () => {
      try {
        // const exerciseItem = await axios.get("http://127.0.0.1:5000/exercise");
        const exerciseItem = await axios.get(
          "https://xstormexercise.cyclic.app/exercise"
        );
        setExercises(exerciseItem.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (bodyPart === "all") {
      fetch();
    } else {
      fetchData("https://xstormexercise.cyclic.app/exercise", "").then(
        (res) => {
          const bodyPartData = res.data.filter(
            (el) => el.bodyPart === bodyPart
          );
          setExercises(bodyPartData);
        }
      );
    }
  }, [bodyPart]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
      <Exercises
        bodyPart={bodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;

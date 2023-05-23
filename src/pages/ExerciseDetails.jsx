import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SimilarExercise from "../components/SimilarExercise";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
import axios from "axios";
import { options, youTubeUrl } from "../utils/fetchData";
import { motion } from "framer-motion";

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      // const res = await axios.get(`http://127.0.0.1:5000/exercise/${id}`);
      const res = await axios.get(
        `https://xstormexercise.cyclic.app/exercise/${id}`
      );
      setExerciseDetail(res.data.data);

      const videoRes = await axios.get(
        `${youTubeUrl}/search?query=${res.data.data.name}`,
        options
      );
      setExerciseVideos(videoRes.data.contents);

      const targetRes = await axios.get(
        `https://xstormexercise.cyclic.app/exercise/target/${res.data.data.target}`
      );
      setTargetMuscleExercises(targetRes.data.data);

      const equipmentRes = await axios.get(
        `https://xstormexercise.cyclic.app/exercise/equipment/${res.data.data.equipment}`
      );
      setEquipmentExercises(equipmentRes.data.data);
    };
    fetch();
  }, [id]);

  return (
    <motion.div
      exit={{
        x: 2000,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      <Detail
        name={exerciseDetail.name}
        bodyPart={exerciseDetail.bodyPart}
        gifUrl={exerciseDetail.gifUrl}
        target={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
      />
      <ExerciseVideos
        name={exerciseDetail.name}
        id={"exercises"}
        exerciseVideos={exerciseVideos}
      />
      <SimilarExercise
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
        targetMuscle={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
      />
    </motion.div>
  );
}

export default ExerciseDetails;

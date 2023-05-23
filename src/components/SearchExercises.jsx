import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import style from "./SearchExercises.module.css";
import axios from "axios";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { motion } from "framer-motion";

const awesomeVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  viewport: { once: true },
};

const SearchExercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://xstormexercise.cyclic.app/exercise/bodyParts"
        );
        setBodyParts(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const clickHandler = async () => {
    if (search) {
      try {
        const res = await axios.get(
          "https://xstormexercise.cyclic.app/exercise"
        );
        const exercise = res.data.data.filter(
          (el) =>
            el.name.includes(search) ||
            el.bodyPart.includes(search) ||
            el.equipment.includes(search) ||
            el.target.includes(search)
        );

        setExercises(exercise);
        setBodyPart(search);
        setSearch("");
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt="37px" p="20px">
      <Typography
        textAlign={"center"}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "30px" } }}
        mb="50px"
      >
        <motion.div
          variants={awesomeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Awesome Exercises You <br />
          Should Know
        </motion.div>
      </Typography>
      <Box position={"relative"} mb={"100px"}>
        <motion.div
          variants={awesomeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TextField
            sx={{
              input: { fontWeight: "700" },
              width: { lg: "800px", xs: "350px" },
              borderRadius: "40px",
              backgroundColor: "#fff",
            }}
            type="text"
            height="76px"
            value={search}
            onChange={searchHandler}
            placeholder="Search Exercises"
          />
          <Button
            className={style.search}
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              textTransform: "none",
              position: "absolute",
              right: "0px",
            }}
            onClick={clickHandler}
          >
            search
          </Button>
        </motion.div>
      </Box>

      <Box position={"relative"} width={"100%"} p="20px" className={style.box}>
        <HorizontalScrollBar
          data={["all", ...bodyParts]}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

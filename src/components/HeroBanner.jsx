import React from "react";
import { Box, Typography, Button } from "@mui/material";
import style from "./HeroBanner.module.css";
import HeroBannerImage from "../assets/HeroBanner.jpg";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.4, when: "beforeChildren" },
  },
};

const fitnessVariant = {
  hidden: { x: -500 },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

const smileVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const effectiveVariant = {
  hidden: { x: -800 },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500,
    },
  },
};

const buttonContVariant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    originX: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500,
    },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
      type: "spring",
      mass: 0.2,
      damping: 2,
    },
  },
};

function HeroBanner() {
  return (
    <motion.div variants={containerVariant} initial="hidden" animate="visible">
      <Box
        sx={{
          mt: { lg: "212px", xs: "80px" },
          ml: { sm: "50px" },
        }}
        position={"relative"}
        p={"20px"}
      >
        <motion.div variants={fitnessVariant}>
          <Typography color={"#FF2625"} fontWeight={"600"} fontSize={"26px"}>
            Fitness Club
          </Typography>
        </motion.div>

        <motion.div variants={smileVariant}>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
            mt={"15px"}
          >
            Sweat, Smile <br /> and Repeat
          </Typography>
        </motion.div>

        <motion.div variants={effectiveVariant}>
          <Typography
            fontSize={"18px"}
            lineHeight={"35px"}
            sx={{ fontSize: { lg: "26px", sm: "18px" } }}
            mt="20px"
            mb="20px"
          >
            Check out the most effective exercises
          </Typography>
        </motion.div>

        <motion.div variants={buttonContVariant}>
          <motion.div variants={buttonVariant} whileHover="hover">
            <Button
              variant="contained"
              color="error"
              href="#exercises"
              sx={{
                mt: { lg: "35px", sm: "20px" },
                backgroundColor: "#FF2526",
              }}
            >
              Explore Exercises
            </Button>
          </motion.div>
        </motion.div>

        <Typography
          color={"#FF2625"}
          fontWeight={600}
          fontSize={"200px"}
          sx={{
            fontSize: { lg: "200px", sm: "150px" },
            opacity: 0.1,
            display: { sm: "block", xs: "none" },
          }}
        >
          Exercises
        </Typography>

        <Box
          position={"absolute"}
          sx={{
            width: { lg: "50%", sm: "70%" },
            top: { lg: "-280px", xs: "-140px" },
            right: { lg: "0px", sm: "-130px" },
            display: { sm: "block", xs: "none" },
          }}
        >
          <img
            src={HeroBannerImage}
            alt="herobanner"
            className={style.herobanner}
          />
        </Box>
      </Box>
    </motion.div>
  );
}

export default HeroBanner;

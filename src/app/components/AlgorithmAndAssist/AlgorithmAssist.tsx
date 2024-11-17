"use client";
import React from "react";
import { Flex, Button, Overlay, Box } from "@mantine/core";
import classes from "../../Pages/home/hero.module.css";
import { Group } from "@mantine/core";
import Images from "../Image";

const AlgorithmAssist = () => {
  return (
    <Flex
      direction="row"
      justify="flex-end"
      className={classes.HomeMainFlexWrapper}
    >
      <Box className={classes.HomeMainFlexContainer}>
        <Flex className={classes.homeMainFlexRoot}>
          <Flex
            direction="row"
            gap={20}
            pt={87}
            className={classes.homeFirstChild}
          >
            <Box className={classes.secondContWrapper}>
              <Box className={classes.routineImgWrapper}>
                <Images
                  src="/assests/Routine1.jpeg"
                  className={classes.Routine1}
                />{" "}
                <Images
                  src="/assests/Routine2.jpeg"
                  className={classes.Routine2}
                />{" "}
              </Box>
            </Box>
          </Flex>{" "}
          <Flex direction="column" className={classes.homeFlexRootSecondChild}>
            <p className={classes.homeRootTextBlue}>
              Create Algorithm Assisted Routine
            </p>
            <p className={classes.homeAlgorithTitle}>
              Experience the power of algorithm-assisted routine creation
            </p>
            <p className={classes.homeAlgorithpara}>
              Our school management system introduces the innovative "Create
              Algorithm Assisted Routine" feature, designed to simplify and
              optimize the process of creating and managing school timetables.
              By leveraging advanced algorithms and intelligent scheduling
              techniques, this feature revolutionizes the way school
              administrators and staff handle routine creation.
            </p>
            <Button
              variant="filled"
              px={15}
              py={10}
              mt={7}
              mb={21}
              size="md"
              className={classes.button1}
            >
              Get Started
            </Button>
            <p className={classes.homeTextRootSecondPara}>
              "Routine Management used to be the most tedious task before, but
              now with the Medhavhi Automated Routine Management System managing
              teachers has been so much easier. All thanks to Medhavhi."
            </p>
            <p className={classes.homeRootAlgorithName}>
              Sunita Nuepane Silwal
            </p>
            <p className={classes.homeAlgorithCollegeName}>
              Padma Shree College
            </p>
          </Flex>
        </Flex>
      </Box>{" "}
    </Flex>
  );
};

export default AlgorithmAssist;

import { Box, Flex, Button, Paper, Progress, Transition } from "@mantine/core";
import { useRef, useState, useEffect } from "react";
import { useIntersection } from "@mantine/hooks";
import classes from "../Pages/home/hero.module.css";

const CreateSchool = () => {
  return (
    <Flex justify="flex-end" className={classes.Home_create_school}>
      <Flex gap="4.625rem" className={classes.Home_create_FlexContainer}>
        <Flex direction="column">
          <p className={classes.homeRootTextBlue}>Create School</p>
          <p className={classes.homeAlgorithTitle}>How it works</p>{" "}
          <Button
            variant="filled"
            px={15}
            py={10}
            size="md"
            className={classes.button1}
          >
            Create School{" "}
          </Button>
        </Flex>
        <Box className={classes.workProcessStepCounter}>
          <Box className={classes.workProcessStepline}>
            <Box className={classes.workProgressInsideLine}></Box>
          </Box>
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 top-10 sm:-top-1 h-0 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>1</Box>
              </Box>
              <Box className={classes.WorkProcess_stepDescription}>
                Submit a form
              </Box>
            </Box>
          </Box>
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 top-10 sm:-top-1 h-0 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>2</Box>
              </Box>{" "}
              <Box className={classes.WorkProcess_stepDescription}>
                Get connected with us
              </Box>
            </Box>
          </Box>
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 top-10 sm:-top-1 h-0 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>3</Box>
              </Box>{" "}
              <Box className={classes.WorkProcess_stepDescription}>
                Get your school approved
              </Box>
            </Box>
          </Box>
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                style={{ transform: "rotate(180deg)" }}
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 top-10 sm:-top-1 h-0 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>6</Box>
              </Box>{" "}
              <Box className={classes.WorkProcess_stepDescription}>
                Now, Teach, Learn & Connect Effortlessly.
              </Box>
            </Box>
          </Box>
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                style={{ transform: "rotate(180deg)" }}
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 top-10 sm:-top-1 h-0 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>5</Box>
              </Box>{" "}
              <Box className={classes.WorkProcess_stepDescription}>
                Enroll students, teachers, and parents.
              </Box>
            </Box>
          </Box>{" "}
          <Box className={classes.workProcessStepMouseB}>
            <Box>
              <svg
                style={{ transform: "rotate(180deg)" }}
                width="1em"
                height="1em"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-4 top-10 sm:-top-1 h-4 sm:h-3 -left-2 sm:left-20 lg:left-[160px]"
              >
                <path
                  d="m1 9 4-4-4-4"
                  stroke="#9A9DA3"
                  strokeWidth="1.333"
                  className={classes.workProcessArrowIcon}
                  roke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Box>
            <Box className={classes.WorkProcess_stepNumber}>
              <Box className={classes.WorkProcess_stepSecond}>
                <Box className={classes.WorkProcess_stepNumberText}>4</Box>
              </Box>{" "}
              <Box className={classes.WorkProcess_stepDescription}>
                Setup your School & Board
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex direction="column" className={classes.wrokProcess_Smallhead}>
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>1</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Submit a <br />
                  form
                </p>
              </Box>
            </Flex>
            <Flex className={classes.step__counter__dotted_small}></Flex>
          </Flex>{" "}
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>2</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Get connected <br />
                  with us
                </p>
              </Box>
            </Flex>
            <Flex className={classes.step__counter__dotted_small}></Flex>
          </Flex>{" "}
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>3</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Get your school
                  <br />
                  approved
                </p>
              </Box>
            </Flex>
            <Flex className={classes.step__counter__dotted_small}></Flex>
          </Flex>{" "}
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>4</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Setup your <br />
                  School & Board
                </p>
              </Box>
            </Flex>
            <Flex className={classes.step__counter__dotted_small}></Flex>
          </Flex>{" "}
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>5</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Enroll students, teachers,
                  <br />
                  and parents.
                </p>
              </Box>
            </Flex>
            <Flex className={classes.step__counter__dotted_small}></Flex>
          </Flex>{" "}
          <Flex direction="column">
            <Flex direction="row" gap="2.5rem" align="center">
              <Box className={classes.mantine_Flex_root}>
                <p className={classes.Home_number_700}>6</p>
              </Box>
              <Box>
                <p className={classes.Home_number_500}>
                  Now, Teach, Learn & Connect <br />
                  Effortlessly.
                </p>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateSchool;

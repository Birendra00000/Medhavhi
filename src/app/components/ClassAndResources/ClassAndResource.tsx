import { Box, Flex, Button, Paper, Progress, Transition } from "@mantine/core";
import { useRef, useState, useEffect } from "react";
import { useIntersection } from "@mantine/hooks";
import classes from "./classAndresources.module.css";

const ClassAndResource = () => {
  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    if (entry?.isIntersecting) {
      setProgressValue(100);
      // Clean up on unmount or when progress reaches 100%
    }
  }, [entry?.isIntersecting]);

  return (
    <Flex direction="row" className={classes.HomeMainFlexWrapper}>
      <Box className={classes.HomeMainFlexContainer}>
        <Flex gap="10%" className={classes.heroFirstSection}>
          <Flex direction="column" className={classes.HomeClassAndResourceFlex}>
            <p className={classes.homeRootTextBlue}>
              Class & Resource Management
            </p>
            <p className={classes.homeAlgorithTitle}>
              Streamlining Operations with Efficient Class and Resource
              Management
            </p>
            <Paper
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              ref={ref}
            >
              <Flex direction="column" className={classes.home_Resources_Wrap}>
                <p className={classes.homeResource_700}>Assignments</p>
                <p className={classes.homeResource_500}>
                  Seamlessly create, distribute, and evaluate assignments,
                  fostering a productive learning environment.
                </p>

                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>
              <Flex direction="column" className={classes.home_Resources_Wrap}>
                <p className={classes.homeResource_700}>Videos & Resources</p>
                <p className={classes.homeResource_500}>
                  Effortlessly organize, store, and distribute videos,
                  documents, and other learning resources, creating a dynamic
                  and engaging learning environment.
                </p>

                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>
              <Flex direction="column" className={classes.home_Resources_Wrap}>
                <p className={classes.homeResource_700}>Doubts Clearance</p>
                <p className={classes.homeResource_500}>
                  Robust doubt clearance spaces and sessions, providing students
                  with collaborative platforms to seek clarification and enhance
                  their understanding.
                </p>

                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>

              {/* Repeat similar sections for Videos & Resources and Doubts Clearance */}
            </Paper>
          </Flex>
          <Flex
            direction="row"
            gap={20}
            pt={87}
            className={classes.homeFirstChild}
          >
            <Box className={classes.secondContWrapper}>
              <Box className={classes.routineImgWrapper}>
                <img
                  src="/assests/Routine1.jpeg"
                  className={classes.Resources1}
                />{" "}
                <img
                  src="/assests/Routine2.jpeg"
                  className={classes.Resources2}
                />{" "}
              </Box>
            </Box>
          </Flex>{" "}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ClassAndResource;

import { Box, Flex, Button, Paper, Progress, Transition } from "@mantine/core";
import { useRef, useState, useEffect } from "react";
import { useIntersection } from "@mantine/hooks";
import classes from "../../Pages/home/hero.module.css";
import Images from "../Image";

const ConnectedLearning = () => {
  const { ref, entry } = useIntersection({
    threshold: 0.5,
  });

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setProgressValue(100);
      // Clean up on unmount or when progress reaches 100%
    }
  }, [entry?.isIntersecting]);

  return (
    <Flex
      direction="row"
      justify="flex-end"
      className={classes.HomeMainFlexWrapper}
    >
      <Box className={classes.HomeMainFlexContainer}>
        <Flex gap="8%" className={classes.homeMainFlexRoot}>
          {" "}
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
                  className={classes.Resources1}
                />{" "}
                <Images
                  src="/assests/Routine2.jpeg"
                  className={classes.Resources2}
                />{" "}
              </Box>
            </Box>
          </Flex>{" "}
          <Flex
            direction="column"
            className={classes.connected_and_learing_MarginX}
          >
            <p className={classes.homeRootTextBlue}>
              Connected Learning and Community Engagement{" "}
            </p>
            <p className={classes.homeAlgorithTitle}>
              Seamless Online Class, Event, Attendance and Leave management
            </p>{" "}
            <Paper
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              ref={ref}
            >
              {" "}
              <Flex direction="column" className={classes.home_Resources_Wrap}>
                <p className={classes.homeResource_700}>
                  Online class & Events
                </p>
                <p className={classes.homeResource_500}>
                  Effortlessly conduct online classes, manage virtual events,
                  and foster meaningful engagement within your school community.
                </p>
                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>
              <Flex gap="8" direction="column">
                <p className={classes.homeResource_700}>Community</p>
                <p className={classes.homeResource_500}>
                  Create a vibrant community network that facilitates seamless
                  communication, knowledge exchange, and collaboration among
                  various stakeholders.
                </p>
                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>
              <Flex gap="8" direction="column">
                <p className={classes.homeResource_700}>
                  Attendance and Leave Management
                </p>
                <p className={classes.homeResource_500}>
                  Advanced attendance and leave management features, designed to
                  simplify administrative tasks and enhance productivity for
                  schools.
                </p>
                <Progress.Root size="sm" w="35%">
                  <Progress.Section
                    value={progressValue}
                    className={classes.progressSection}
                  ></Progress.Section>
                </Progress.Root>
              </Flex>
              <Button
                variant="filled"
                px={15}
                py={10}
                size="md"
                className={classes.button1}
              >
                Start Using{" "}
              </Button>
            </Paper>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ConnectedLearning;

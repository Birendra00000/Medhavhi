"use client";
import React from "react";
import { Box, Flex, Grid } from "@mantine/core";
import classes from "./dashboard.module.css";
import MySubjects from "../../components/dashboards/MySubject/MySubject/MySubjects";
import CommunityTimeline from "../../components/dashboards/MySubject/CommunityTimeline";
import Attendance from "../../components/dashboards/MySubject/Attendance";

const page = () => {
  return (
    <Box className={classes.dashboard__MarginX}>
      <Grid className={classes.LeftSide__Container}>1 </Grid>
      <Flex direction="column" className={classes.centralSubject__container}>
        <MySubjects />
        {/* <Flex direction="row">
          <Attendance />
          <CommunityTimeline />
        </Flex> */}
      </Flex>
      <Box className={classes.rightNotification__container}>3 </Box>
    </Box>
  );
};

export default page;

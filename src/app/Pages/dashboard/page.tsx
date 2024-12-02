"use client";
import React from "react";
import { Box, Flex, Grid } from "@mantine/core";
import classes from "./dashboard.module.css";
import MySubjects from "../../components/dashboards/MySubject/MySubject/MySubjects";
import CommunityTimeline from "../../components/dashboards/communityTimeline/CommunityTimeline";
import Attendance from "../../components/dashboards/Attendance/Attendance";
import Notification from "../../components/dashboards/Notification/Notification/Notification";
import Calendars from "../../components/dashboards/Notification/calendar/Calendar";

const page = () => {
  return (
    <Box className={classes.dashboard__MarginX}>
      <Grid className={classes.LeftSide__Container}>1 </Grid>
      <Flex direction="column" className={classes.centralSubject__container}>
        <MySubjects />
        <Flex direction="row" gap="20px">
          <Attendance />
          <CommunityTimeline />
        </Flex>
      </Flex>
      <Flex className={classes.rightNotification__container} direction="column">
        <Notification />
        <Calendars />
      </Flex>
    </Box>
  );
};

export default page;

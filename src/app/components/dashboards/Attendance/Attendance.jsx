import React from "react";
import ApexCharts from "apexcharts";
import { Box, Flex } from "@mantine/core";
import classes from "./Attendance.module.css";
import SummaryChart from "./SummaryChart";
import { CiCalendar } from "react-icons/ci";
const Attendance = () => {
  return (
    <Box w="45%" className={classes.Attendee_Margin_x}>
      <Flex direction="column" w="100%">
        {" "}
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          w="100%"
          className={classes.header__content_all}
        >
          <Box>Attendance</Box>
          <Flex
            direction="row"
            align="center"
            justify="center"
            className={classes.attendance__header_date}
          >
            <p>12/02/2024</p>
            <CiCalendar size={20} />{" "}
          </Flex>
        </Flex>
        <Flex direction="column" className={classes.ChartWrap_MarginX}>
          <Flex
            direction="row"
            align="center"
            gap="sm"
            className={classes.chartHeader__bgBlue}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-user-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
            <p>Attendance Summary</p>
          </Flex>
          <SummaryChart />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Attendance;

"use client";
import React from "react";
import dayjs from "dayjs";
import { Calendar } from "@mantine/dates";
import "@mantine/dates/styles.css";
import classes from "./calendar.module.css";
import { IconArrowRight } from "@tabler/icons-react";
import { Box, Button, Flex, Paper } from "@mantine/core";

const Calendars = () => {
  const upcoming_event_date = [
    "2024-12-28",
    "2024-11-30",
    "2024-12-3",
    "2024-12-6",
    "2024-12-12",
    "2024-12-15",
    "2024-12-18",
    "2024-12-10",
  ];

  const past_event = ["2024-11-01", "2024-11-05", "2024-09-10", "2024-11-13"];

  const leave_event = ["2024-12-04", "2024-11-09", "2024-12-23"];

  const today = dayjs().startOf("day");

  const numberof_UpcominEvent = upcoming_event_date.filter((date) =>
    dayjs(date).isAfter(today)
  ).length;

  const numberof_past_event = past_event.filter((date) =>
    dayjs(date).isBefore(today)
  ).length;

  const numberof_AfterleaveEvent = leave_event.filter((date) =>
    dayjs(date).isAfter(today)
  ).length;

  const numberof_BeforeleaveEvent = leave_event.filter((date) =>
    dayjs(date).isBefore(today)
  ).length;

  const Total_Number_of_Leave_Event =
    numberof_AfterleaveEvent + numberof_BeforeleaveEvent;

  console.log("Number of Upcoming Events:", numberof_UpcominEvent);
  return (
    <>
      <Flex className={classes.calendar_top_container}>
        {" "}
        <Paper shadow="xs" radius="md" w="100%">
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            className={classes.header__content_all}
          >
            <Flex direction="column">
              <Box>Event Calendar</Box>
            </Flex>
            <Button
              variant="transparent"
              rightSection={<IconArrowRight size={14} />}
            >
              View all
            </Button>
          </Flex>{" "}
          <Calendar
            getDayProps={(date) => {
              const isToday = dayjs(date).isSame(today, "date");
              const isUpcomingEvent = upcoming_event_date.some((eventDate) =>
                dayjs(eventDate).isSame(date, "date")
              );

              const isPastEvent = past_event.some((eventDate) =>
                dayjs(eventDate).isSame(date, "date")
              );
              const isleaveEvent = leave_event.some((eventDate) =>
                dayjs(eventDate).isSame(date, "date")
              );

              return {
                style: {
                  backgroundColor: isToday
                    ? "#e0f7fa"
                    : isUpcomingEvent
                    ? "#06A457"
                    : isPastEvent
                    ? "red"
                    : isleaveEvent
                    ? "#FFF2D9"
                    : undefined,
                  color: isToday
                    ? "black"
                    : isUpcomingEvent || isPastEvent
                    ? "#fff"
                    : undefined,

                  fontWeight:
                    isToday || isUpcomingEvent || isPastEvent || isleaveEvent
                      ? "bold"
                      : "normal", // Bold font for today
                  borderRadius: "50%", // Circle the date
                  border: isToday ? "1px solid #0288d1" : undefined, // Border for today
                },
              };
            }}
            classNames={{
              levelsGroup: classes.levelsGroup,
              calendarHeaderControl: classes.calendarHeaderControl,
              calendarHeaderLevel: classes.calendarHeaderLevel,
            }}
          />
          <Flex
            direction="row"
            gap="sm"
            className={classes.Calendar__Footer__button__MarginX}
          >
            <Flex direction="column" className={classes.events__container}>
              <span style={{ fontWeight: "500" }}>
                {numberof_UpcominEvent} Days
              </span>
              <span style={{ color: "green", fontSize: "12px" }}>upcoming</span>
            </Flex>
            <Flex direction="column" className={classes.events__container}>
              <span style={{ fontWeight: "500" }}>
                {numberof_past_event} Days
              </span>
              <span style={{ color: "red", fontSize: "12px" }}>
                Past Events
              </span>
            </Flex>
            <Flex direction="column" className={classes.events__container}>
              <span style={{ fontWeight: "500" }}>
                {Total_Number_of_Leave_Event} Days
              </span>
              <span style={{ color: "#FFC043", fontSize: "12px" }}>Leave</span>
            </Flex>
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};

export default Calendars;

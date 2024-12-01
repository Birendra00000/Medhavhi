import { Box, Button, Flex } from "@mantine/core";
import React from "react";
import classes from "./community.module.css";
import { FaPlus } from "react-icons/fa";
const communityTimeline = () => {
  return (
    <Box w="45%" className={classes.Attendee_Margin_x}>
      {" "}
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
          <Button variant="transparent" leftSection={<FaPlus size={14} />}>
            Create
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default communityTimeline;

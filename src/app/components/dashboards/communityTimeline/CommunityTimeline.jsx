import { Box, Button, Flex } from "@mantine/core";
import React from "react";
import classes from "./community.module.css";
import { FaPlus } from "react-icons/fa";
import { Grid } from "@mantine/core";
import Images from "../../Image";
import { FaChevronRight } from "react-icons/fa6";
const communityTimeline = () => {
  return (
    <Box w="55%" className={classes.Attendee_Margin_x}>
      {" "}
      <Flex direction="column" w="100%">
        {" "}
        <Flex
          direction="row"
          justify="space-between"
          cle
          align="center"
          w="100%"
          className={classes.header__content_all}
        >
          <Box>Attendance</Box>
          <Button variant="transparent" leftSection={<FaPlus size={14} />}>
            Create
          </Button>
        </Flex>
        <Flex direction="column" gap="md">
          <Grid w="100%" className={classes.community__timeline__updated}>
            <Grid.Col span={7}>
              <Flex gap="sm">
                <Images
                  src="/assests/dashboard/community/acheCor.png"
                  className={classes.community__logo__updated__company}
                />
                <Flex direction="column">
                  <Box className={classes.company__title}>Acme Corporation</Box>
                  <Box className={classes.company__timeline__updated}>
                    last updated: 4 Days ago
                  </Box>
                </Flex>
              </Flex>
            </Grid.Col>
            <Grid.Col span={2}>
              <Box>20+</Box>
            </Grid.Col>
            <Grid.Col span={3} className={classes.view__updated__wrap}>
              <Flex align="center">
                <Box mr="3">View</Box>
                <FaChevronRight size={14} />
              </Flex>
            </Grid.Col>
          </Grid>{" "}
          <Grid w="100%" className={classes.community__timeline__updated}>
            <Grid.Col span={7}>
              <Flex gap="sm">
                <Images
                  src="/assests/dashboard/community/figma.png"
                  className={classes.community__logo__updated__company}
                />
                <Flex direction="column">
                  <Box className={classes.company__title}>Figma</Box>
                  <Box className={classes.company__timeline__updated}>
                    last updated: 4 Days ago
                  </Box>
                </Flex>
              </Flex>
            </Grid.Col>
            <Grid.Col span={2}>
              <Box>08+</Box>
            </Grid.Col>
            <Grid.Col span={3} className={classes.view__updated__wrap}>
              <Flex align="center">
                <Box mr="3">View</Box>
                <FaChevronRight size={14} />
              </Flex>
            </Grid.Col>
          </Grid>{" "}
          <Grid w="100%" className={classes.community__timeline__updated}>
            <Grid.Col span={7}>
              <Flex gap="sm">
                <Images
                  src="/assests/dashboard/community/medhavi.png"
                  className={classes.community__logo__updated__company}
                />
                <Flex direction="column">
                  <Box className={classes.company__title}>Medhavhi</Box>
                  <Box className={classes.company__timeline__updated}>
                    last updated: 4 Days ago
                  </Box>
                </Flex>
              </Flex>
            </Grid.Col>
            <Grid.Col span={2}>
              <Box>06+</Box>
            </Grid.Col>
            <Grid.Col span={3} className={classes.view__updated__wrap}>
              <Flex align="center">
                <Box mr="3">View</Box>
                <FaChevronRight size={14} />
              </Flex>
            </Grid.Col>
          </Grid>{" "}
          <Grid w="100%" className={classes.community__timeline__updated}>
            <Grid.Col span={7}>
              <Flex gap="sm">
                <Images
                  src="/assests/dashboard/community/wayne.png"
                  className={classes.community__logo__updated__company}
                />
                <Flex direction="column">
                  <Box className={classes.company__title}>
                    Wayne Enterprises
                  </Box>
                  <Box className={classes.company__timeline__updated}>
                    last updated: 4 Days ago
                  </Box>
                </Flex>
              </Flex>
            </Grid.Col>
            <Grid.Col span={2}>
              <Box>04+</Box>
            </Grid.Col>
            <Grid.Col span={3} className={classes.view__updated__wrap}>
              <Flex align="center">
                <Box mr="3">View</Box>
                <FaChevronRight size={14} />
              </Flex>
            </Grid.Col>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default communityTimeline;

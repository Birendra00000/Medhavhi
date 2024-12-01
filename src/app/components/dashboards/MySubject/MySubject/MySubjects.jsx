import React from "react";
import classes from "./mysubject.module.css";
import { Box, Flex } from "@mantine/core";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { SimpleGrid } from "@mantine/core";
import Images from "@/app/components/Image";
const MySubjects = () => {
  return (
    <Box className={classes.subject__MarginX_wrap}>
      <Flex direction="column" m="20">
        <Flex
          direction="row"
          justify="space-between"
          className={classes.header__content_all}
        >
          <Flex direction="column">
            <Box>My Subjects</Box>
            <Box className={classes.Header__subject_count}>
              You have total of 09 Subjects
            </Box>
          </Flex>
          <Button
            variant="transparent"
            rightSection={<IconArrowRight size={14} />}
          >
            View all
          </Button>
        </Flex>
        <SimpleGrid
          cols={2}
          gutter="lg"
          className={classes.Subject__Name__Container}
        >
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/Light.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Academic Skills and Team Based Learning
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/DW.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Data Warehouse and Data Mining
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/CM.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Computational Mathematics
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/PM.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Principles of Management{" "}
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/DL.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>Digital Logic</Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/AJ.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>Advanced JAVA</Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>{" "}
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/dw2.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Data Warehouse and Data Mining{" "}
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
          <Box className={classes.subject__Main__Wrap}>
            <Flex className={classes.Subject__FlexBox__Container} gap="sm">
              <Images
                src="/assests/dashboard/SA2.png"
                className={classes.subject__logo}
              />
              <Flex direction="column">
                <Box className={classes.subject__title}>
                  Academic Skills and Team Based Learning{" "}
                </Box>
                <Box className={classes.subject__code}>CS430A</Box>
              </Flex>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default MySubjects;

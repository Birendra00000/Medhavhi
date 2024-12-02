import { Box, Button, Flex } from "@mantine/core";
import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./notification.module.css";
import Images from "@/app/components/Image";
const Notification = () => {
  return (
    <Box className={classes.notification__container_wrap}>
      <Flex direction="column">
        <Flex
          direction="row"
          justify="space-between"
          className={classes.header__content_all}
        >
          <Flex direction="column">
            <Box>Notifications</Box>
          </Flex>
          <Button
            variant="transparent"
            rightSection={<IconArrowRight size={14} />}
          >
            View all
          </Button>
        </Flex>
        <Flex direction="column" gap="md" p="20">
          <Flex className={classes.notification__wrap_Marginx} gap="sm">
            <Images
              src="/assests/dashboard/notification/holi.png"
              className={classes.notification_image_banner}
            />
            <Flex direction="column">
              <Box>Public holiday at dec 20 for Holi Festival</Box>
              <Box className={classes.notification_updated_date}>
                22nd Feb 2024
              </Box>
            </Flex>
          </Flex>{" "}
          <Flex className={classes.notification__wrap_Marginx} gap="sm">
            <Images
              src="/assests/dashboard/notification/picnic.png"
              className={classes.notification_image_banner}
            />
            <Flex direction="column">
              <Box>Public holiday at dec 20 for Holi Festival</Box>
              <Box className={classes.notification_updated_date}>
                22nd Feb 2024
              </Box>
            </Flex>
          </Flex>{" "}
          <Flex className={classes.notification__wrap_Marginx} gap="sm">
            <Images
              src="/assests/dashboard/notification/tihar.png"
              className={classes.notification_image_banner}
            />
            <Flex direction="column">
              <Box>Public holiday at dec 20 for Holi Festival</Box>
              <Box className={classes.notification_updated_date}>
                22nd Feb 2024
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Notification;

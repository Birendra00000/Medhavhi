"use client";
import React from "react";
import { Flex, Button, Overlay, Box } from "@mantine/core";
import { Group } from "@mantine/core";
import classes from "../../Pages/home/hero.module.css";
const HomeHero = () => {
  return (
    <Flex
      direction="row"
      justify="flex-end"
      className={classes.HomeMainFlexWrapper}
    >
      <Box className={classes.HomeMainFlexContainer}>
        <Flex className={classes.homeMainFlex}>
          <Flex className={classes.homeWidthHalf}>
            <Flex
              w="100%"
              gap="md"
              justify="flex-start"
              align="flex-start"
              direction="column"
              wrap="wrap"
            >
              <p className={classes.homeTitle}>
                Ultimate School and Learning Management System
              </p>
              <p className={classes.homeExplained}>
                Experience the power of Medhavhi, the all-in-one platform
                connecting students, teachers, schools, and parents, simplifying
                education, communication, and collaboration for a seamless
                learning experience.
              </p>
              <Group grow>
                <Button
                  variant="filled"
                  px={15}
                  py={10}
                  size="md"
                  className={classes.button1}
                >
                  Get Started
                </Button>
                <Button
                  variant="transparent"
                  px={10}
                  py={10}
                  size="md"
                  className={classes.button2}
                >
                  Create School
                </Button>
              </Group>
              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <p className={classes.home_hero_Available}>Also Available on</p>
                <img
                  src="/assests/appstore.jpg"
                  className={classes.appstoreImg}
                />{" "}
                <img
                  src="/assests/playstore.png"
                  className={classes.appstoreImg}
                />{" "}
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="row" gap={20} className={classes.homePhotoHead}>
            <img
              src="/assests/androidSmall.png"
              className={classes.androidSmall}
            />{" "}
            <Flex w="100%" direction="column" justify="flex-start">
              <img
                src="/assests/desktophalf.png"
                className={classes.desktophalf}
              />{" "}
            </Flex>{" "}
          </Flex>
        </Flex>
      </Box>{" "}
    </Flex>
  );
};

export default HomeHero;

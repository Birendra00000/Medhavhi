"use client";

import { Box, Flex } from "@mantine/core";
import React from "react";
import classes from "./Download.module.css";
const Download = () => {
  return (
    <Flex direction="row" className={classes.Download_RootFlexContainer}>
      <Flex className={classes.downloadFlexContainer}>
        <Flex direction="column" className={classes.Download_OrderSecon}>
          <p className={classes.mobileDownloaditle}>
            Download the mobile app now.
          </p>

          <Flex gap="1rem" className={classes.DownLoad__store__flex}>
            <img
              src="/assests/GoogleStore.png"
              alt=""
              className={classes.downloadGoogleStore}
            />
            <img
              src="/assests/AppleStore.png"
              alt=""
              className={classes.downloadAppleStore}
            />{" "}
          </Flex>
        </Flex>
        <Box className={classes.Download_IphoneParent}>
          <img
            src="/assests/Iphone.png"
            alt=""
            className={classes.Download_Iphone}
          />
        </Box>
        <Box className={classes.Download__end__svg}>
          <svg
            width="217"
            height="239"
            viewBox="0 0 217 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              opacity="0.1"
              cx="153.998"
              cy="151.633"
              rx="154.097"
              ry="151.068"
              transform="rotate(-13.9644 153.998 151.633)"
              fill="#2BB8D6"
            ></ellipse>
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Download;

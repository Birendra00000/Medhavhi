"use client";
import React, { useState, useRef } from "react";
import { MantineProvider, Container, createTheme, Box } from "@mantine/core";
import { CloseButton } from "@mantine/core";
import classes from "./Navbar.module.css";
import Images from "./Image";
import { Flex, Button } from "@mantine/core";
import { Group } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

const Navbar = () => {
  const [opened, setOpened] = useState<boolean>(false);

  const ref = useClickOutside(() => setOpened(false));

  const handleClick = () => {
    setOpened(!opened);
  };
  return (
    <Flex className={classes.responsiveContainer}>
      <Flex className={classes.navbar_container}>
        <Box>
          {" "}
          <Images src="/assests/logo.png" className={classes.Navbar__logo} />
        </Box>
        <Group gap="sm" className={classes.buttongroupLarge}>
          <Button variant="transparent" color="rgba(0, 0, 0, 1)">
            Login
          </Button>
          <Button variant="transparent" className={classes.signUpBottom}>
            Sign up
          </Button>
        </Group>

        <Box className={classes.hamburg__container} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </Box>
        {opened && (
          <Box className={classes.openNavbarContainer}>
            <Group
              gap="sm"
              className={classes.buttongroupSmallResponsive}
              ref={ref}
            >
              <Flex direction="row" justify="end" w="100%" p="14">
                <CloseButton
                  size="md"
                  variant="transparent"
                  onClick={handleClick}
                />
              </Flex>
              <Flex direction="column" gap="lg" w="350" mt="44" justify="end">
                <Button className={classes.LoginInBottom}>Login</Button>
                <Button className={classes.signUpBottom} variant="transparent">
                  Sign up
                </Button>
              </Flex>
            </Group>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;

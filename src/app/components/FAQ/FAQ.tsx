"use client";
import { Container, Title, Accordion, Flex, Box } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./FAQ.module.css";

const groceries = [
  {
    value: "What is Medhavhi?",
    description:
      "Medhavhi is a comprehensive school and learning management system designed to streamline academic and administrative tasks. It includes features such as student management, grade tracking, and communication tools.",
  },
  {
    value: "Who can used the Medhavhi?",
    description:
      "Medhavhi is designed for schools, educators, and students, offering tools to manage school operations and support student learning.",
  },
  {
    value: "Is Medhavhi available on mobile devices?",
    description:
      "Yes, Medhavhi is accessible on both desktop and mobile devices, making it convenient for teachers, students, and parents.",
  },
];

export function FAQ() {
  return (
    <Flex
      direction="row"
      justify="flex-end"
      className={classes.FAQ_MainFlexWrapper}
    >
      <Box className={classes.FAQ__MainFlexContainer}>
        <p className={classes.homeRootTextBlue}>FAQs </p>
        <p className={classes.homeAlgorithTitle}>Most Asked Questions </p>{" "}
        <Box className={classes.FAQ__Flex_container} ml="0" pl="0" w="100%">
          <Accordion
            classNames={{ chevron: classes.chevron }}
            chevron={<IconPlus className={classes.icon} />}
            w="100%"
          >
            {groceries.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control className={classes.FAQ__title}>
                  {item.value}
                </Accordion.Control>
                <Accordion.Panel>
                  {" "}
                  <Box>
                    <Flex direction="column">
                      <p className={classes.homeRootTextBlue}>Ans:</p>
                      <p> {item.description}</p>
                    </Flex>
                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Flex>
  );
}

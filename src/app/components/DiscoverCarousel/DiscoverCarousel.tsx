import { Box, Flex, Overlay, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import classes from "./DiscoverCarousel.module.css";

const DiscoverCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 1500 }));
  return (
    <Flex
      direction="row"
      justify="flex-end"
      className={classes.HomeMainFlexWrapper}
    >
      <Box className={classes.HomeMainFlexContainer}>
        <Box>
          <p className={classes.homeRootTextBlue}>Discover </p>
          <p className={classes.homeAlgorithTitle}>
            Discover something awesome{" "}
          </p>{" "}
        </Box>
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          height={240}
          align="start"
          slideGap="md"
          controlsOffset="xs"
          loop
          dragFree
          withControls={false}
          mb={{ base: "0", sm: "0", md: "100" }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Checkup.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>Visualizing Learning</p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Admission.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>
                  The Evolution of Education
                </p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>{" "}
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Checkup.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>
                  Medhavhi's Innovative Routine
                </p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>{" "}
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Admission.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>
                  {" "}
                  Medhavhi's Free Video Resources
                </p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>{" "}
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Checkup.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>Visualizing Learning</p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>{" "}
          <Carousel.Slide className={classes.carouselContainer}>
            <Box className={classes.carousellayer}>
              <img
                src="/assests/Admission.png"
                alt=""
                color="transparent"
                width="100%"
                className={classes.carouselImage}
              />
              <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                opacity={0.7}
                style={{
                  borderRadius: "1rem",
                }}
              ></Overlay>
            </Box>
            <Flex
              className={classes.carouselDiscoverAbsolute}
              direction="column"
            >
              <Box>
                <p className={classes.carouselTitle}>
                  {" "}
                  Medhavhi's Free Video Resources
                </p>
                <p className={classes.carouselTitleDate}>12th june 2023</p>
              </Box>
              <Button
                variant="default"
                radius="xl"
                rightSection={<IconArrowRight size={14} />}
                className={classes.carouselButtonText}
              >
                Learn More{" "}
              </Button>{" "}
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Box>
    </Flex>
  );
};

export default DiscoverCarousel;

"use client";
import React from "react";
import { Flex, Button, Overlay, Box } from "@mantine/core";
import classes from "./hero.module.css";
import { Group } from "@mantine/core";
import Images from "../../components/Image";
import "@mantine/carousel/styles.css";
import { FAQ } from "../../components/FAQ/FAQ";
import Download from "../../components/DownLoadHome/Download";
import Footer from "../../components/FooterHome/Footer";
import ClassAndResource from "@/app/components/ClassAndResources/ClassAndResource";
import CreateSchool from "@/app/components/CreateSchoolStepper/CreateSchool";
import DiscoverCarousel from "@/app/components/DiscoverCarousel/DiscoverCarousel";
import ConnectedLearning from "@/app/components/ConnectedLearingHome/ConnectedLearning";
import HomeHero from "@/app/components/HomeHero/HomeHero";
import AlgorithmAssist from "@/app/components/AlgorithmAndAssist/AlgorithmAssist";
const Page = () => {
  return (
    <>
      <HomeHero />
      <AlgorithmAssist />
      <ClassAndResource />
      {/* CONNECTED 
LEARING AND 
COMMUNITY  */}
      {/* ENGAGMENT  */}
      <ConnectedLearning />
      <CreateSchool />
      <DiscoverCarousel />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
};

export default Page;

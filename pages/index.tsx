import HeroSection from "@/components/HeroSection";
import SignupStrip from "@/components/SignupStrip";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <SignupStrip />
      <HeroSection />
    </React.Fragment>
  );
};

export default HomePage;

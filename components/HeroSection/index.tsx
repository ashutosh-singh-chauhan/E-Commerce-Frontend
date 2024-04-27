import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "../Button";

interface Props {}
const HeroSection: React.FC<Props> = () => {
  return (
    <Box pos={"relative"}>
      <Box
        px={20}
        py={"5%"}
        w="full"
        h={{ base: "100%", lg: "90vh", "2xl": "700px" }}
        backgroundImage={'url("/banners/hero-banner.png")'}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"right"}
        backgroundSize={"cover"}
      >
        <Text
          className="heading"
          mb={2}
          fontSize={"4xl"}
          fontWeight={"semibold"}
          maxW="550px"
          lineHeight={"shorter"}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Text>
        <Text
          maxW="550px"
          fontSize={"xs"}
          color={"blackAlpha.700"}
          fontWeight={400}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </Text>
        <Button buttonText="Shop Now" styles={{ marginTop: "32px" }} />
        <HStack></HStack>
      </Box>
      <Image
        width={100}
        height={100}
        src="/icons/hero-start-icon.svg"
        alt="icon"
        style={{
          position: "absolute",
          top: "100px",
          right: "80px",
        }}
      />
      <Image
        width={55}
        height={55}
        src="/icons/hero-start-icon.svg"
        alt="icon"
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
        }}
      />
      <Flex
        height={"60px"}
        width="full"
        background="linear-gradient(to right, #434343 0%, black 100%)"
      />
    </Box>
  );
};

export default HeroSection;

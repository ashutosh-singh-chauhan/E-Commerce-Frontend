import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { HeroSectionStats } from "@/constants/home";
import { IHeroStats } from "@/interfaces/home";
import useMobile from "@/hooks/useMobile";

interface Props {}
const HeroSection: React.FC<Props> = () => {
  const { isMobile } = useMobile();
  return (
    <Box pos={"relative"}>
      <Box
        px={[4, null, null, 20]}
        py={[5, null, null, "5%"]}
        w="full"
        bg="#F0F0F0"
        h={{ base: "100%", lg: "90vh", "2xl": "700px" }}
        backgroundImage={isMobile ? "none" : 'url("/banners/hero-banner.png")'}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"right"}
        backgroundSize={"cover"}
        style={
          isMobile
            ? {
                display: "flex",
                flexDirection: "column",
              }
            : {}
        }
      >
        <Text
          className="heading"
          mb={2}
          fontSize={["xl", null, null, "4xl"]}
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
        <Button
          buttonText="Shop Now"
          size={isMobile ? "lg" : "md"}
          styles={{ marginTop: "32px" }}
        />
        <HStack
          mt={5}
          justify={"space-between"}
          maxW={"550px"}
          align={"center"}
        >
          {HeroSectionStats.map((stat: IHeroStats, idx: number) => {
            return (
              <>
                <VStack h="74px" key={idx + stat.subTitle} align={"flex-start"}>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    {stat.title}
                  </Text>
                  <Text
                    fontSize={"xs"}
                    color={"blackAlpha.700"}
                    fontWeight={400}
                  >
                    {stat.subTitle}
                  </Text>
                </VStack>
                {idx < 2 ? (
                  <Divider
                    h="60px"
                    orientation="vertical"
                    borderColor="gray.500"
                  />
                ) : null}
              </>
            );
          })}
        </HStack>
      </Box>
      {isMobile ? null : (
        <>
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
        </>
      )}
      {isMobile && (
        <Box pos={"relative"} width={"full"} height={"448px"}>
          <Image
            layout="fill"
            src="/banners/hero-banner-mobile.png"
            alt="image-not-found"
          />
        </Box>
      )}
      <Flex
        height={"60px"}
        width="full"
        background="linear-gradient(to right, #434343 0%, black 100%)"
      />
    </Box>
  );
};

export default HeroSection;

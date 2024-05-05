import {
  Box,
  Center,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <Box w="full" bg="#F0F0F0">
      {/* <Flex py={10} h="full" w="full" maxW={"1240px"} m="auto"> */}
      <SimpleGrid py={20} px={10} columns={12} spacing={3}>
        <GridItem colSpan={{ base: 12, lg: 3 }} w="full">
          <Text className="heading" fontWeight={"bold"} fontSize={"lg"}>
            SHOP.CO
          </Text>
          <Text
            mt={8}
            fontSize={"xs"}
            color={"blackAlpha.700"}
            fontWeight={400}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Text>
          {/* Social Profile */}
          <HStack mt={5} spacing={3}>
            <Center
              bg="white"
              border={"1px solid rgba(0, 0, 0, 0.10)"}
              width={"28px"}
              height={"28px"}
              borderRadius={"50%"}
            >
              <Icon as={FaYoutube} />
            </Center>
            <Center
              bg="white"
              border={"1px solid rgba(0, 0, 0, 0.10)"}
              width={"28px"}
              height={"28px"}
              borderRadius={"50%"}
            >
              <Icon as={FaTwitter} />
            </Center>
            <Center
              bg="white"
              border={"1px solid rgba(0, 0, 0, 0.10)"}
              width={"28px"}
              height={"28px"}
              borderRadius={"50%"}
            >
              <Icon as={FaFacebookF} />
            </Center>
            <Center
              bg="white"
              border={"1px solid rgba(0, 0, 0, 0.10)"}
              width={"28px"}
              height={"28px"}
              borderRadius={"50%"}
            >
              <Icon as={FaInstagram} />
            </Center>
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 3 }} w="full"></GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }}></GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }}></GridItem>
      </SimpleGrid>
      {/* </Flex> */}
    </Box>
  );
};

export default Footer;

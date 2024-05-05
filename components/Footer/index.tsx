import {
  Box,
  Center,
  GridItem,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <Box w="full" bg="#F0F0F0">
      <SimpleGrid py={20} px={10} columns={12} spacingX={4}>
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
        <GridItem colSpan={{ base: 12, lg: 3 }} w="full">
          <Heading mb={5} size={"xs"}>
            COMPANY
          </Heading>
          <List fontSize={"xs"} spacing={3}>
            <ListItem>Lorem ipsum</ListItem>
            <ListItem>Consectetur </ListItem>
            <ListItem>Integer</ListItem>
            <ListItem>Facilisis</ListItem>
          </List>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }}>
          <Heading mb={5} size={"xs"}>
            HELP
          </Heading>
          <List fontSize={"xs"} spacing={3}>
            <ListItem>Lorem ipsum</ListItem>
            <ListItem>Consectetur </ListItem>
            <ListItem>Integer</ListItem>
            <ListItem>Facilisis</ListItem>
          </List>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }}>
          <Heading mb={5} size={"xs"}>
            FAQ
          </Heading>
          <List fontSize={"xs"} spacing={3}>
            <ListItem>Lorem ipsum</ListItem>
            <ListItem>Consectetur </ListItem>
            <ListItem>Integer</ListItem>
            <ListItem>Facilisis</ListItem>
          </List>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;

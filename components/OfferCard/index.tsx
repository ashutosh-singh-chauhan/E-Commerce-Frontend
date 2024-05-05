import { Box, Flex, Icon, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import Button from "../Button";

interface Props {}
const OfferCard: React.FC<Props> = () => {
  return (
    <Flex
      direction={["column", null, null, "row"]}
      mx={[4, null, null, "auto"]}
      mb={16}
      gap={3}
      maxW={"1200px"}
      bg="black"
      borderRadius={20}
      px={[3, null, null, 12]}
      py={[4, null, null, 8]}
      justify={"space-between"}
    >
      <Box width={["full", null, null, "550px"]}>
        <Text
          className="heading"
          mb={2}
          fontSize={["lg", null, null, "xl"]}
          fontWeight={"semibold"}
          maxW="500px"
          lineHeight={"short"}
          color={"white"}
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </Text>
      </Box>
      <VStack>
        <Flex
          width={"full"}
          align={"center"}
          maxW={"380px"}
          bg="white"
          px={4}
          borderRadius={62}
        >
          <Icon boxSize={4} color={"gray"} as={TfiEmail} />
          <Input
            fontSize={"sm"}
            placeholder={"Enter your email address"}
            border={"none"}
            _focusVisible={{
              border: "none",
            }}
          />
        </Flex>
        <Button
          buttonText="Subscribe to Newsletter"
          color="black"
          bgColor="white"
          hoverColor="black"
          hoverBgColor="white"
          styles={{
            width: "100%",
            fontSize: "14px",
            fontWeight: 600,
          }}
        />
      </VStack>
    </Flex>
  );
};

export default OfferCard;

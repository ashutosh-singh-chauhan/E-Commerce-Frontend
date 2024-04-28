import { Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <Flex justify={"center"}>
      <Flex
        px={4}
        h="70px"
        width={"full"}
        maxW={"1240px"}
        justify={"space-between"}
        alignItems={"center"}
      >
        {/* Logo */}
        <Text className="heading" fontWeight={"bold"} fontSize={"lg"}>
          SHOP.CO
        </Text>
        {/* Menu Options */}
        <HStack cursor={"pointer"} spacing={1}>
          <Text
            fontSize={"sm"}
            fontWeight={400}
            _hover={{
              fontWeight: "semibold",
            }}
          >
            Shop
          </Text>
          <Icon as={IoChevronDownOutline} />
        </HStack>
        <Text
          fontSize={"sm"}
          fontWeight={400}
          cursor={"pointer"}
          _hover={{
            fontWeight: "semibold",
          }}
        >
          On Sale
        </Text>
        <Text
          fontSize={"sm"}
          fontWeight={400}
          cursor={"pointer"}
          _hover={{
            fontWeight: "semibold",
          }}
        >
          New Arrivals
        </Text>
        <Text
          fontSize={"sm"}
          fontWeight={400}
          cursor={"pointer"}
          _hover={{
            fontWeight: "semibold",
          }}
        >
          Brands
        </Text>
        {/* Search Icon */}
        <Flex
          px={4}
          align={"center"}
          borderRadius={62}
          bg="#F0F0F0"
          height={"44px"}
          width="545px"
        >
          <Icon boxSize={5} color={"gray"} as={FiSearch} />
          <Input
            fontSize={"sm"}
            border={"none"}
            _focusVisible={{
              border: "none",
            }}
          />
        </Flex>
        <HStack spacing={4}>
          <Icon boxSize={5} as={FaCartShopping} cursor={"pointer"} />
          <Icon boxSize={5} as={FaRegUserCircle} cursor={"pointer"} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;

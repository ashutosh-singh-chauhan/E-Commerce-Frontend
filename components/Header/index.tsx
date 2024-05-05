import {
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import useMobile from "@/hooks/useMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../Sidebar";

interface Props {}
const Header: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMobile } = useMobile();

  return (
    <Flex justify={"center"}>
      <Flex
        px={4}
        h={["50px", null, null, "70px"]}
        width={"full"}
        maxW={"1240px"}
        justify={"space-between"}
        alignItems={"center"}
      >
        <HStack spacing={3}>
          {/* Hamburger icon */}
          {isMobile && (
            <Icon mt={1.5} boxSize={6} as={RxHamburgerMenu} onClick={onOpen} />
          )}
          <Text className="heading" fontWeight={"bold"} fontSize={"lg"}>
            SHOP.CO
          </Text>
        </HStack>
        {/* Menu Options */}
        {!isMobile ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : null}
        {/* Search Icon */}
        {isMobile ? null : (
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
        )}
        <HStack spacing={4}>
          {isMobile && <Icon boxSize={5} as={FiSearch} />}
          <Icon boxSize={5} as={FaCartShopping} cursor={"pointer"} />
          <Icon boxSize={5} as={FaRegUserCircle} cursor={"pointer"} />
        </HStack>
      </Flex>
      {isMobile && isOpen ? (
        <Sidebar isOpen={isOpen} onClose={onClose} />
      ) : null}
    </Flex>
  );
};

export default Header;

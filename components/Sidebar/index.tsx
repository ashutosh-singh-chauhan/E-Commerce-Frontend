import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoChevronDownOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<Props> = ({ onClose, isOpen }) => {
  return (
    <>
      <Drawer
        closeOnOverlayClick
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            top={4}
            bg="gray.100"
            _focusVisible={{
              boxShadow: "none",
            }}
          />
          <DrawerHeader>
            <Text className="heading" fontWeight={"bold"} fontSize={"lg"}>
              SHOP.CO
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <VStack align={"flex-start"} spacing={5}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

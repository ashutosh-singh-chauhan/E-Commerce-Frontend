import useMobile from "@/hooks/useMobile";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {}
const SignupStrip: React.FC<Props> = () => {
  const { isMobile } = useMobile();
  const [closed, setClosed] = useState<boolean>(false);
  const handleClose = () => {
    setClosed(true);
  };
  return (
    <>
      {closed ? null : (
        <Flex
          background="linear-gradient(to right, #434343 0%, black 100%)"
          pos={"relative"}
          py={2}
          justify={"center"}
        >
          <Text fontSize={["xs", null, null, "sm"]} color={"white"}>
            Sign up and get 20% off to your first order.
          </Text>
          &nbsp;
          <Text
            fontSize={["xs", null, null, "sm"]}
            cursor={"pointer"}
            textDecoration={"underline"}
            color={"white"}
          >
            Sign Up Now
          </Text>
          {!isMobile ? (
            <Icon
              pos={"absolute"}
              top={3}
              right={"10%"}
              color={"white"}
              as={RxCross2}
              cursor={"pointer"}
              onClick={handleClose}
            />
          ) : null}
        </Flex>
      )}
    </>
  );
};

export default SignupStrip;

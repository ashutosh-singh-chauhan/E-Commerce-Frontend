import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface Props {
  color?: string;
  bgColor?: string;
  buttonText?: string;
  onClick?: () => void;
  isRounded?: boolean;
  styles?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}
const Button: React.FC<Props> = ({
  color,
  bgColor,
  buttonText = "Save",
  onClick,
  isRounded = true,
  styles,
  size = "md",
  disabled = false,
}) => {
  return (
    <ChakraButton
      isDisabled={disabled}
      paddingInline={size === "sm" ? "20px" : size === "md" ? "50px" : "80px"}
      fontSize={"sm"}
      fontWeight={400}
      color={color || "white"}
      bg={bgColor || "black"}
      _hover={{
        bg: "#1A202C",
      }}
      _disabled={{
        cursor: "not-allowed",
        bg: "RGBA(0, 0, 0, 0.48)",
      }}
      borderRadius={isRounded ? "62px" : "8px"}
      onClick={onClick}
      style={styles}
    >
      {buttonText}
    </ChakraButton>
  );
};

export default Button;

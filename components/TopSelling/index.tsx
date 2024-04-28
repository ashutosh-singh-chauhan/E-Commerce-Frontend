import { HeroNewArivals } from "@/constants/home";
import { INewArivals } from "@/interfaces/home";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import ArticleCard from "../ArticleCard";
import Button from "../Button";

const TopSelling = () => {
  return (
    <Flex direction={"column"} align={"center"} my={10}>
      <Text
        className="heading"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        as="h3"
        fontSize={"xl"}
      >
        Top Selling
      </Text>
      <Flex my={10} gap={4} justify={"center"}>
        {HeroNewArivals.map((article: INewArivals, idx) => (
          <ArticleCard article={article} />
        ))}
      </Flex>
      <Button
        buttonText="View All"
        bgColor="white"
        color="black"
        styles={{
          border: "1px solid rgba(0, 0, 0, 0.10)",
        }}
      />
    </Flex>
  );
};

export default TopSelling;
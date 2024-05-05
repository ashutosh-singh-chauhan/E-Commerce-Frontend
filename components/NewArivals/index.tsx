import { HeroNewArivals } from "@/constants/home";
import { INewArivals } from "@/interfaces/home";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import ArticleCard from "../ArticleCard";
import Button from "../Button";
import useMobile from "@/hooks/useMobile";

const NewArivals = () => {
  const { isMobile } = useMobile();
  return (
    <Flex direction={"column"} align={"center"} my={10}>
      <Text className="heading" fontWeight={"bold"} as="h3" fontSize={"xl"}>
        NEW ARRIVALS
      </Text>
      <Flex
        pl={4}
        pb={4}
        w={"full"}
        my={[8, null, null, 10]}
        gap={4}
        justify={isMobile ? "flex-start" : "center"}
        overflowX={"auto"}
        _last={{
          pr: 4,
        }}
        className="hide_scrollbar"
      >
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

export default NewArivals;

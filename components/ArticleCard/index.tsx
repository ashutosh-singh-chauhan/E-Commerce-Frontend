import { INewArivals } from "@/interfaces/home";
import React from "react";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import { Badge, Box, Card, HStack, Text, VStack } from "@chakra-ui/react";
import useMobile from "@/hooks/useMobile";

interface Props {
  article: INewArivals;
}
const ArticleCard: React.FC<Props> = ({ article }) => {
  const { isMobile } = useMobile();
  return (
    <Card
      minW={isMobile ? "200px" : "290px"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={20}
      cursor={"pointer"}
    >
      <Box
        position={"relative"}
        width={isMobile ? "200px" : "290px"}
        height={isMobile ? "200px" : "290px"}
        borderRadius={20}
      >
        <Image
          src={article.imageUrl}
          layout="fill"
          alt="image not found"
          style={{
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
      </Box>
      <VStack spacing={0} align={"flex-start"} p={2}>
        <Text
          noOfLines={2}
          fontSize={["sm", null, null, "md"]}
          fontWeight={"bold"}
        >
          {article.title}
        </Text>
        <HStack>
          <StarRatings
            rating={article.averageRating}
            starRatedColor="gold"
            numberOfStars={article.maxRating}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
          <Text
            fontSize={"xs"}
            color={"blackAlpha.700"}
            fontWeight={400}
          >{`${article.averageRating}/${article.maxRating}`}</Text>
        </HStack>
        <HStack>
          {article.discountedPrice ? (
            <>
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
              >{`$${article.discountedPrice}`}</Text>
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                color="blackAlpha.500"
                textDecoration={"line-through"}
              >{`$${article.price}`}</Text>
              <Badge
                color="red"
                fontSize={"10px"}
                borderRadius={62}
                bg="rgba(255, 51, 51, 0.10)"
                fontWeight={"normal"}
                px={2}
                py={1}
              >{`-${article.discountPercentage}%`}</Badge>
            </>
          ) : (
            <Text
              fontSize={"md"}
              fontWeight={"bold"}
            >{`$${article.price}`}</Text>
          )}
        </HStack>
      </VStack>
    </Card>
  );
};

export default ArticleCard;

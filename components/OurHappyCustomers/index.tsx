import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import StarRatings from "react-star-ratings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OurHappyCustomersData } from "@/constants/home";
import { IHappyCustomers } from "@/interfaces/home";
import { FaCircleCheck, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import useMobile from "@/hooks/useMobile";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  slideToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 425,
      settings: {
        dots: true,
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};
const OurHappyCustomers = () => {
  const { isMobile } = useMobile();
  const sliderRef = useRef<any>(null);
  const handleNext = () => {
    sliderRef?.current?.slickNext();
  };
  const handlePrevious = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <Box mt={10}>
      <HStack
        mx={[4, null, null, 10]}
        justify={"space-between"}
        align={"center"}
      >
        <Text
          className="heading"
          mb={2}
          fontSize={["xl", null, null, "xl"]}
          fontWeight={"semibold"}
          lineHeight={"shorter"}
        >
          OUR HAPPY CUSTOMERS
        </Text>
        {!isMobile && (
          <HStack spacing={5}>
            <Icon
              onClick={handlePrevious}
              boxSize={8}
              as={FaArrowLeft}
              cursor={"pointer"}
            />
            <Icon
              onClick={handleNext}
              boxSize={8}
              as={FaArrowRight}
              cursor={"pointer"}
            />
          </HStack>
        )}
      </HStack>
      <Box mt={10} className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {OurHappyCustomersData.map(
            (ourHappyCustomer: IHappyCustomers, idx: number) => (
              <VStack
                align={"flex-start"}
                p={4}
                borderWidth={1}
                borderColor={"gray.200"}
                borderRadius={14}
                key={idx + ourHappyCustomer.name}
              >
                <StarRatings
                  rating={ourHappyCustomer.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="1px"
                />
                <HStack align={"center"}>
                  <Text fontSize={"md"} fontWeight={"bold"}>
                    {ourHappyCustomer.name}
                  </Text>
                  <Icon color={"green.500"} as={FaCircleCheck} />
                </HStack>
                <Text fontSize={"sm"} color={"gray.600"} noOfLines={5}>
                  {ourHappyCustomer.desc}
                </Text>
              </VStack>
            )
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurHappyCustomers;
